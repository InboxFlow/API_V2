import {
  FormController,
  FormError,
  FormLabel,
  Input,
  Select,
  useToast,
} from "@arkyn/components";

import { useOverlay } from "../../../../context";
import { ContentContainer } from "./styles";
import { useLoaderData } from "@remix-run/react";
import { ChannelLoader } from "~/client/types";

function Content() {
  const { modalData } = useOverlay().updateChannelModal;
  const { showToast } = useToast();

  const { categories } = useLoaderData<ChannelLoader>();

  const mappedCategories = categories.map((category) => ({
    label: category.name,
    value: category.id,
  }));

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
        <FormLabel showAsterisk>Category:</FormLabel>
        <Select
          isSearchable
          name="categoryId"
          defaultValue={modalData?.categoryId}
          options={mappedCategories}
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
