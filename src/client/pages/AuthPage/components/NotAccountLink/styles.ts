import { styled } from "@linaria/react";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  margin: 0 auto;

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 21.79px;
    text-align: center;
    color: var(--text-muted);
  }

  a {
    font-size: 16px;
    font-weight: 600;
    line-height: 21.79px;
    color: rgb(var(--spotlight-primary));
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export { Container };
