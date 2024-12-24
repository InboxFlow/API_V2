import { styled } from "@linaria/react";
import { Link } from "@remix-run/react";

const MenuUserContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;
  padding: 4px;

  border: none;
  border-radius: 6px;
  background-color: var(--background-foreground);

  img {
    height: 40px;
    width: 40px;
    border-radius: 22px;
  }

  &:hover {
    filter: brightness(0.95);
  }

  html.dark &:hover {
    filter: brightness(1.2);
  }
`;

const PopoverHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;

  border-bottom: 1px solid var(--border);

  strong {
    font-size: 14px;
    font-weight: 600;
    line-height: 19.07px;
    color: var(--text-heading);
  }

  small {
    font-size: 12px;
    font-weight: 400;
    line-height: 16.34px;
    color: var(--text-muted);
  }
`;

const PopoverContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 8px;

  border-bottom: 1px solid var(--border);
`;

const NavigationLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 8px;
  gap: 16px;

  min-width: 220px;

  color: var(--text-body);
  border-radius: var(--rounded-inputs);
  text-decoration: none;

  font-size: 14px;
  line-height: 14px;
  font-weight: 400;

  &:hover {
    cursor: pointer;
    color: rgba(var(--spotlight-primary), 1);
    background-color: var(--card-foreground-primary);
  }

  &.danger {
    color: rgba(var(--spotlight-danger), 1);
  }

  svg {
    height: 20px;
    width: 20px;
  }
`;

const PopoverFooter = styled.div`
  display: flex;
  padding: 8px;
`;

export {
  MenuUserContainer,
  NavigationLink,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
};
