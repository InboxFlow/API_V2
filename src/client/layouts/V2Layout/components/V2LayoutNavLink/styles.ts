import { styled } from "@linaria/react";
import { Link } from "@remix-run/react";

const V2LayoutNavLinkContainer = styled(Link)`
  display: flex;
  align-items: center;

  border-radius: 4px;
  padding: 6px 8px;

  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
  color: var(--text-body);

  background: inherit;

  &:hover {
    color: var(--text-heading);
    filter: brightness(0.98);
  }

  &.active {
    font-weight: 600;
    color: rgba(var(--spotlight-primary), 1);
    background: rgba(var(--spotlight-primary), 0.1);
  }
`;

export { V2LayoutNavLinkContainer };
