import { styled } from "@linaria/react";

const V2LayoutHeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 64px;

  background-color: var(--background-foreground);
  padding: 0 24px;

  position: fixed;
  left: 0;
  top: 0;
  right: 0;

  z-index: 1000;

  border-bottom: 1px solid var(--border);
`;

export { V2LayoutHeaderContainer };
