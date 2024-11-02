import { styled } from "@linaria/react";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 500px;
  padding: 16px;
  gap: 16px;

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    color: var(--text-body);

    strong {
      padding-left: 4px;
      font-weight: 600;
      color: var(--text-heading);
    }
  }

  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

export { ContentContainer };
