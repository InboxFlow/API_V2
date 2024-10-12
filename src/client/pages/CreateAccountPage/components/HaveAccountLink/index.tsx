import { Link } from "@remix-run/react";
import { Container } from "./styles";

function HaveAccountLink() {
  return (
    <Container>
      <p>You have a account?</p>
      <Link to="/client/auth">Click here</Link>
    </Container>
  );
}

export { HaveAccountLink };
