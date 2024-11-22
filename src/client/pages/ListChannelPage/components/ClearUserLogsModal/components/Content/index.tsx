import { FormController, FormError, FormLabel, Input } from "@arkyn/components";
import { ContentContainer } from "./styles";

function Content() {
  return (
    <ContentContainer>
      <p>You are about to delete user all logs?</p>

      <FormController>
        <FormLabel showAsterisk>Your password:</FormLabel>
        <Input type="password" name="password" />
        <FormError />
      </FormController>
    </ContentContainer>
  );
}

export { Content };
