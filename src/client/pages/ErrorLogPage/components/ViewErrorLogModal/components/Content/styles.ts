import { styled } from "@linaria/react";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 500px;
  padding: 16px;
  gap: 8px;

  .lineContainer {
    display: flex;
    align-items: center;
    gap: 16px;

    strong {
      font-size: 14px;
      font-weight: 600;
      line-height: 19.07px;
      color: var(--text-heading);
    }

    > p {
      font-size: 12px;
      font-weight: 400;
      line-height: 16.34px;
      color: var(--text-muted);
    }
  }

  .columnContainer {
    display: flex;
    flex-direction: column;
    gap: 8px;

    strong {
      font-size: 14px;
      font-weight: 600;
      line-height: 19.07px;
      color: var(--text-heading);
    }

    pre {
      max-width: 1000px;
      min-width: 1000px;
      padding: 16px;
      border: 1px solid var(--border);
      background-color: var(--card-foreground-primary);
      border-radius: var(--rounded-inputs);
      overflow: auto;

      code {
        font-family: "Fira code", Courier, monospace;
        font-size: 12px;
        color: var(--text-heading);
        font-weight: 500;
      }
    }
  }

  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

export { ContentContainer };
