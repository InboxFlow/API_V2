import { styled } from "@linaria/react";

const RenderingDocumentationPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px;
  height: min-content;
  flex: 1;
`;

const TitleContainer = styled.h1`
  letter-spacing: -0.015em;
  font-size: 2.25rem;
  font-weight: 700;

  color: var(--text-heading);
  flex: 1;
`;

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SectionTitleContainer = styled.h2`
  letter-spacing: -0.015em;
  font-size: 1.875rem;
  font-weight: 600;
  margin-top: 24px;

  color: var(--secondary-900);

  svg {
    display: none;
  }

  &:hover {
    svg {
      display: unset;
    }
  }
`;

export {
  SectionContainer,
  RenderingDocumentationPageContainer,
  SectionTitleContainer,
  TitleContainer,
};
