import { Link } from "@remix-run/react";
import { Container } from "./styles";

function NotAccountLink() {
  return (
    <Container>
      <p>Don't have an account?</p>
      <Link to="/client/auth/create-account">Click here</Link>
    </Container>
  );
}

export { NotAccountLink };
