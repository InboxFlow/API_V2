import { FormController, FormError, FormLabel, Input } from "@arkyn/components";
import { ContentContainer } from "./styles";

function Content() {
  return (
    <ContentContainer>
      <FormController>
        <FormLabel showAsterisk>Name:</FormLabel>
        <Input type="text" name="name" autoComplete="name" />
        <FormError />
      </FormController>
    </ContentContainer>
  );
}

export { Content };
