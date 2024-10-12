import { useAutomation } from "@arkyn/components";

import { AuthForm } from "./components/AuthForm";
import { AuthHeader } from "./components/AuthHeader";
import { NotAccountLink } from "./components/NotAccountLink";

import { Container, Content, FormContainer, Hero } from "./styles";

function AuthPage() {
  useAutomation();

  return (
    <Container>
      <Content>
        <Hero />
        <FormContainer>
          <AuthHeader />
          <AuthForm />
          <NotAccountLink />
        </FormContainer>
      </Content>
    </Container>
  );
}

export { AuthPage };
