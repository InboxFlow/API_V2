import { styled } from "@linaria/react";
import { Form } from "@remix-run/react";

const Container = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export { Container };
