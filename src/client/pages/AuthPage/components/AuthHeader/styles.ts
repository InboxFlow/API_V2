import { styled } from "@linaria/react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  h2 {
    font-size: 24px;
    font-weight: 600;
    line-height: 32.69px;
    text-align: left;
    color: var(--text-heading);
  }

  p {
    font-size: 16px;
    font-weight: 400;
    text-align: left;
    color: var(--text-muted);

    margin-bottom: calc(30px - 12px);
  }
`;

export { Container };
