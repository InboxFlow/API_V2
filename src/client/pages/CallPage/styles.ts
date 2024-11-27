import { styled } from "@linaria/react";

const CallPageContainer = styled.main`
  display: flex;
  width: 100%;
  flex-direction: column;

  @media (max-width: 500px) {
    padding: 24px 16px;
    gap: 24px;
  }
`;

const StatsContainer = styled.main`
  display: flex;
  gap: 16px;
`;

export { CallPageContainer, StatsContainer };
