import { styled } from "@linaria/react";

const ErrorLogPageContainer = styled.main`
  display: flex;
  width: 100%;
  flex-direction: column;

  @media (max-width: 500px) {
    padding: 24px 16px;
    gap: 24px;
  }
`;

export { ErrorLogPageContainer };
