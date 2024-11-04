import { styled } from "@linaria/react";
import { Form } from "@remix-run/react";

const FilterErrorLogsDrawerContent = styled(Form)`
  width: 600px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`;

export { FilterErrorLogsDrawerContent };
