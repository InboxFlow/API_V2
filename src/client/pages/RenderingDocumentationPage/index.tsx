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

  if (!docKey || !documentationFiles[docKey])
    throw new Error("Documentation not found");

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
