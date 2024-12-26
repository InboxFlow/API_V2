import { styled } from "@linaria/react";

const TextParagraphContainer = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  color: var(--text-body);

  code {
    font-size: 0.9rem;
    line-height: 1.3rem;

    font-family: monospace;
    padding: 2px 4px;
    border-radius: 4px;
    background: rgba(var(--spotlight-primary), 0.05);

    &.area {
      display: block;
      padding: 12px 20px;
    }
  }
`;

const ExampleParagraphContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 24px;
  padding: 32px;

  border: 1px solid var(--border);
  background-color: var(--card-foreground-primary);
  border-radius: 8px;

  transition: all 0.15s ease-in-out;

  > header {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;

export { ExampleParagraphContainer, TextParagraphContainer };
