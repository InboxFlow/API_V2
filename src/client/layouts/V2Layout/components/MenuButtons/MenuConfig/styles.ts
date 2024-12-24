import { styled } from "@linaria/react";
import { Link } from "@remix-run/react";

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

  svg {
    height: 20px;
    width: 20px;
  }
`;

export { PopoverHeader, NavigationLink, PopoverContent };
