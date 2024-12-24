import { styled } from "@linaria/react";

const V2LayoutNavGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  background: inherit;
`;

const V2LayoutNavGroupButton = styled.button`
  display: flex;
  align-items: center;

  border-radius: 4px;
  padding: 6px 8px;

  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
  color: var(--text-body);

  border: none;
  background: inherit;

  svg {
    margin-left: auto;
    min-height: 18px;
    max-height: 18px;
    min-width: 18px;
    max-width: 18px;

    transition: transform 0.2s;
  }

  &:hover {
    color: var(--text-heading);
    filter: brightness(0.98);
  }

  &.active {
    font-weight: 600;
    color: rgba(var(--spotlight-primary), 1);
    background: rgba(var(--spotlight-primary), 0.1);
  }

  &.opened {
    svg {
      transform: rotate(180deg);
    }
  }
`;

const V2LayoutNavGroupContent = styled.nav`
  display: flex;
  flex-direction: column;

  gap: 4px;
  margin-left: 12px;
  padding-left: 12px;

  border-left: 1px solid var(--border);
  background-color: inherit;
`;

export {
  V2LayoutNavGroupButton,
  V2LayoutNavGroupContainer,
  V2LayoutNavGroupContent,
};
