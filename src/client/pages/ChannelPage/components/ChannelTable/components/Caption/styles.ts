import { styled } from "@linaria/react";

const CaptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  > section {
    flex: unset;
    width: 300px;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-end;

    > section {
      flex: 1;
      width: 100%;
    }
  }
`;

export { CaptionContainer };
