import { FormController, FormError, FormLabel, Input } from "@arkyn/components";

import { useOverlay } from "~/client/pages/ChannelPage/context";
import { ContentContainer } from "./styles";

function Content() {
  const { modalData } = useOverlay().updateCategoryModal;

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
    </ContentContainer>
  );
}

export { Content };
