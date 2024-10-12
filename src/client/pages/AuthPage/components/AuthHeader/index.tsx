import { Container } from "./styles";

function AuthHeader() {
  return (
    <Container>
      <h1>Welcome!</h1>
      <p>
        Please fill in the fields below with your credentials to access our
        platform.
      </p>
    </Container>
  );
}

export { AuthHeader };
