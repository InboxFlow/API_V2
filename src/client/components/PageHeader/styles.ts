import { styled } from "@linaria/react";

const PageHeaderContainer = styled.header`
  display: flex;
  align-items: center;
  gap: 8px;

  > .header_section {
    display: flex;
    flex-direction: column;
    gap: 8px;

    margin-right: auto;

    h1 {
      font-size: 24px;
      font-weight: 600;
      line-height: 32.69px;

      color: var(--text-heading);
    }
  }
`;

export { PageHeaderContainer };
