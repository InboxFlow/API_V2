import { styled } from "@linaria/react";

const V1LayoutHeaderContainer = styled.header`
  display: flex;
  height: 64px;

  background-color: var(--background-foreground);
  padding: 0 24px;

  position: fixed;
  left: 0;
  top: 0;
  right: 0;

  z-index: 1000;

  border-bottom: 1px solid var(--border);

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    max-width: 1550px;
    margin: 0 auto;
  }
`;

export { V1LayoutHeaderContainer };
