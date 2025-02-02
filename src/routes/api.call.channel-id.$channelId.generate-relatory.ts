import { BadRequestError } from "@arkyn/server";
import { ActionFunctionArgs } from "@remix-run/node";
import Bull from "bull";

import { CallRepository } from "~/app/repositories";

const reportQueue = new Bull("reportQueue", {
  redis: {
    host: "redis-18972.crce181.sa-east-1-2.ec2.redns.redis-cloud.com",
    port: 18972,
    password: "9HScwk2qO47om5oGp0b0bXbuteAhs6LG",
    maxRetriesPerRequest: null,
  },
});

reportQueue.process(async (job) => {
  const startTime = Date.now();

  const callRespository = new CallRepository();
  const channelId = job.data.channelId;

  const perPage = 1000;

  if (!channelId) throw new BadRequestError("ChannelId is required");

  const { lastPage } = await callRespository.findPagination({
    channelId,
    page: 1,
    perPage,
  });

  for (let i = 1; i < lastPage; i++) {
    const calls = await callRespository.findAll({
      channelId,
      page: i,
      perPage,
    });

    console.log(calls.data.map((call) => call.id));
    console.log(`Page ${i} of ${lastPage}`);
  }

  const endTime = Date.now();
  const duration = endTime - startTime;

  const minutes = Math.floor(duration / 60000);
  const seconds = Math.floor((duration % 60000) / 1000);
  const milliseconds = duration % 1000;

  console.log(`Job completed in ${minutes}m:${seconds}s:${milliseconds}ms`);
});

reportQueue.on("completed", (job) => {
  console.log("COMPLETED");
});

export const action = async ({ params }: ActionFunctionArgs) => {
  const channelId = params?.channelId;
  if (!channelId) throw new BadRequestError("ChannelId is required");

  await reportQueue.add({ channelId });
  return null;
};
