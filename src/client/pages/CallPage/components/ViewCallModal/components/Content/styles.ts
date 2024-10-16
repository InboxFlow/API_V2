import { styled } from "@linaria/react";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 500px;
  padding: 16px;
  gap: 16px;

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
      overflow: auto;
      background-color: var(--border);
      padding: 16px;
      border-radius: var(--rounded-cards);
      font-family: "Courier New", Courier, monospace; /* Fonte monoespaçada */
      font-size: 12px; /* Ajuste o tamanho da fonte conforme necessário */
    }
  }

  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

export { ContentContainer };
