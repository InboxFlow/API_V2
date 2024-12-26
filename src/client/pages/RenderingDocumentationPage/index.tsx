import { useParams } from "@remix-run/react";

import { RenderingParagraph } from "~/client/components";
import { documentationFiles } from "~/client/documentation";

import {
  RenderingDocumentationPageContainer,
  SectionContainer,
  SectionTitleContainer,
  TitleContainer,
} from "./styles";

function RenderingDocumentationPage() {
  const params = useParams();
  const docKey = params?.dockKey;

  if (!docKey || !documentationFiles[docKey]) {
    return (
      <RenderingDocumentationPageContainer>
        <TitleContainer>Documentation not found</TitleContainer>
      </RenderingDocumentationPageContainer>
    );
  }

  const documentation = documentationFiles[docKey];

  return (
    <RenderingDocumentationPageContainer>
      <TitleContainer>{documentation.title}</TitleContainer>

      {documentation.sections.map(({ paragraphs, title }, index) => (
        <SectionContainer key={index}>
          {title && <SectionTitleContainer>{title}</SectionTitleContainer>}
          {paragraphs.map((paragraph, index) => (
            <RenderingParagraph key={index} data={paragraph} />
          ))}
        </SectionContainer>
      ))}
    </RenderingDocumentationPageContainer>
  );
}

export { RenderingDocumentationPage };
