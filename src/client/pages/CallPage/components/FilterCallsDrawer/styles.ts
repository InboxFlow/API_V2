import { styled } from "@linaria/react";
import { Form } from "@remix-run/react";

const FilterCallsDrawerContent = styled(Form)`
  width: 600px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`;

export { FilterCallsDrawerContent };
