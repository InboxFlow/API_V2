import Prism from "prismjs";

import { FenceParagraphType } from "~/client/types";
import { FenceContainer } from "./styles";
import "./styles.css";

type FenceProps = {
  data: FenceParagraphType;
};

function Fence({ data }: FenceProps) {
  const { language, content, languageType } = data;

  if (!language) {
    return (
      <FenceContainer className={languageType ? "has-type" : ""}>
        {languageType && <header>{languageType}</header>}
        <pre className={`language-${language}`}>{content}</pre>
      </FenceContainer>
    );
  }

  const children = Prism.highlight(
    content,
    Prism.languages[language],
    language
  );

  return (
    <FenceContainer className={languageType ? "has-type" : ""}>
      {languageType && <header>{languageType}</header>}
      <pre
        className={`language-${language}`}
        dangerouslySetInnerHTML={{ __html: children }}
      />
    </FenceContainer>
  );
}

export { Fence };
