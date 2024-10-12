import { styled } from "@linaria/react";

const PageHeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > .header_section {
    display: flex;
    flex-direction: column;
    gap: 8px;

    h1 {
      font-size: 24px;
      font-weight: 600;
      line-height: 32.69px;

      color: var(--text-heading);
    }
  }
`;

export { PageHeaderContainer };
