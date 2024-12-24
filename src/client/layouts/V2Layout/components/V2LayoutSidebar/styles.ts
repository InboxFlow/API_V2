import { styled } from "@linaria/react";
import { Link } from "@remix-run/react";

const V2LayoutSidebarContainer = styled.nav`
  display: flex;
  flex-direction: column;

  gap: 4px;
  padding: 16px;

  position: fixed;
  top: 64px;
  left: 0;
  height: calc(100vh - 64px);
  width: 260px;

  overflow: auto;

  background: var(--background-foreground);
  border-right: 1px solid var(--border);
`;

export { V2LayoutSidebarContainer };
