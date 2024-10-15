import { Button } from "@arkyn/components";
import { useLoaderData, useNavigate } from "@remix-run/react";
import { ArrowLeft } from "lucide-react";

import { PageHeader } from "~/client/components";
import { CallLoader } from "~/client/types";

function CallPageHeader() {
  const { channel } = useLoaderData<CallLoader>();
  const title = `${channel.name}`;

  const navigate = useNavigate();
  function navigateToChannels() {
    navigate("/client/v1/channels");
  }

  return (
    <PageHeader title={title}>
      <Button leftIcon={ArrowLeft} onClick={navigateToChannels}>
        Back to channels
      </Button>
    </PageHeader>
  );
}

export { CallPageHeader };
