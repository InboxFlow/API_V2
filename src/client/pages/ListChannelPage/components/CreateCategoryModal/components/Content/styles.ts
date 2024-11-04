import { styled } from "@linaria/react";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 500px;
  padding: 16px;
  gap: 16px;

  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

export { ContentContainer };
