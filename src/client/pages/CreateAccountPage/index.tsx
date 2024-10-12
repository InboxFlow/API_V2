import { CreateAccountForm } from "./components/CreateAccountForm";
import { CreateAccountHeader } from "./components/CreateAccountHeader";
import { HaveAccountLink } from "./components/HaveAccountLink";

import { Container, Content, FormContainer, Hero } from "./styles";

function CreateAccountPage() {
  return (
    <Container>
      <Content>
        <FormContainer>
          <CreateAccountHeader />
          <CreateAccountForm />
          <HaveAccountLink />
        </FormContainer>
        <Hero />
      </Content>
    </Container>
  );
}

export { CreateAccountPage };
