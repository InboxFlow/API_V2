import { Button, FormController, FormError, Input } from "@arkyn/components";
import { useNavigation } from "@remix-run/react";
import { Lock, Mail } from "lucide-react";

import { Container } from "./styles";

function AuthForm() {
  const { state } = useNavigation();
  const formIsSubmitting = state !== "idle";

  return (
    <Container method="POST">
      <FormController>
        <Input type="text" name="mail" placeholder="Mail" leftIcon={Mail} />
        <FormError />
      </FormController>

      <FormController>
        <Input
          type="password"
          name="password"
          placeholder="Password"
          leftIcon={Lock}
        />
        <FormError />
      </FormController>

      <Button type="submit" isLoading={formIsSubmitting}>
        Sign in
      </Button>
    </Container>
  );
}

export { AuthForm };
