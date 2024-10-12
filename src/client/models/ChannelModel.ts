import { Channel } from "~/app/entities";

type ChannelModel = ReturnType<Channel["toJson"]>;

export type { ChannelModel };
