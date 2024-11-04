import { styled } from "@linaria/react";

const FooterContainer = styled.footer`
  padding-top: 20px;
  border-top: 1px solid var(--border);

  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    color: var(--text-muted);
  }

  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    gap: 24px;

    p {
      text-align: center;
    }
  }
`;

export { FooterContainer };
