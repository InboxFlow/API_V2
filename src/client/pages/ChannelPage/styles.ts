import { styled } from "@linaria/react";

const ChannelPageContainer = styled.main`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 32px;
  gap: 32px;

  @media (max-width: 500px) {
    padding: 24px 16px;
    gap: 24px;
  }
`;

export { ChannelPageContainer };
