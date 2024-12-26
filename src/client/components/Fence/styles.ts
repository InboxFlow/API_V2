import { styled } from "@linaria/react";

const FenceContainer = styled.div`
  font-family: monospace;

  font-size: 14px;
  font-weight: 500;
  color: var(--text-heading);
  border-radius: 8px;
  border: 1px solid var(--border);
  background: var(--card-foreground-primary);

  > header {
    left: 0;
    top: 0;
    right: 0;
    height: 30px;
    border-radius: 8px 8px 0 0;
    background: var(--card-foreground-primary);
    border-bottom: 1px solid var(--border);

    color: var(--text-body);

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;

    font-size: 12px;
    font-weight: 400;
  }
`;

export { FenceContainer };
