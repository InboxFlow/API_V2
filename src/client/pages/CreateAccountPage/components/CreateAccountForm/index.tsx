import { Button, FormController, FormError, Input } from "@arkyn/components";
import { useNavigation } from "@remix-run/react";
import { Lock, Mail, User } from "lucide-react";

import { Container } from "./styles";

function CreateAccountForm() {
  const { state } = useNavigation();
  const formIsSubmitting = state !== "idle";

  return (
    <Container method="POST">
      <FormController>
        <Input
          type="text"
          name="name"
          placeholder="Full name"
          leftIcon={User}
        />
        <FormError />
      </FormController>

      <FormController>
        <Input type="text" name="mail" placeholder="Mail" leftIcon={Mail} />
        <FormError />
      </FormController>

      <FormController>
        <Input
          type="text"
          name="password"
          placeholder="Password"
          leftIcon={Lock}
        />
        <FormError />
      </FormController>

      <Button type="submit" isLoading={formIsSubmitting}>
        Sign up
      </Button>
    </Container>
  );
}

export { CreateAccountForm };
