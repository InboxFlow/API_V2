import { styled } from "@linaria/react";

const StatsContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  padding: 16px;
  border-radius: var(--rounded-cards);
  background-color: var(--background-foreground);

  gap: 16px;

  .iconContainer {
    width: 48px;
    height: 48px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    background-color: rgba(var(--spotlight-primary), 0.1);

    svg {
      stroke: rgba(var(--spotlight-primary), 1);
      width: 32px;
      height: 32px;
    }
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;

    color: var(--text-body);
  }

  h1 {
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;

    color: var(--text-heading);
  }
`;

export { StatsContainer };
