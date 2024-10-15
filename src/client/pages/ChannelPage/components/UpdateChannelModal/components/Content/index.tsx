import {
  FormController,
  FormError,
  FormLabel,
  Input,
  useToast,
} from "@arkyn/components";

import { useOverlay } from "~/client/pages/ChannelPage/context";
import { ContentContainer } from "./styles";

function Content() {
  const { modalData } = useOverlay().updateChannelModal;
  const { showToast } = useToast();

  function handleCopyChannelId() {
    const channelId = modalData?.id;
    if (!channelId) return;

    navigator.clipboard.writeText(channelId);
    showToast({
      message: "Channel ID copied to clipboard",
      type: "success",
    });
  }

  return (
    <ContentContainer>
      <FormController>
        <FormLabel showAsterisk>Name:</FormLabel>
        <Input
          type="text"
          name="name"
          defaultValue={modalData?.name}
          autoComplete="name"
        />
        <FormError />
      </FormController>

      <FormController>
        <FormLabel showAsterisk>Channel ID:</FormLabel>
        <Input
          prefix="ID"
          type="text"
          readOnly
          name="channelId"
          onClick={handleCopyChannelId}
          defaultValue={modalData?.id}
        />
        <FormError />
      </FormController>
    </ContentContainer>
  );
}

export { Content };
