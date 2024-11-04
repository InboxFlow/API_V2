import { styled } from "@linaria/react";

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 500px) {
    .arkynButton {
      display: none;
    }
  }

  @media (min-width: 500px) {
    .arkynIconButton {
      display: none;
    }
  }
`;

export { Content };
