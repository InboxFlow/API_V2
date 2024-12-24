import {
  AlertContainer,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@arkyn/components";

import { ParagraphType } from "~/client/types";
import { TextParagraphContainer } from "./styles";

type RenderingParagraphProps = {
  data: ParagraphType;
};

function RenderingParagraph({ data }: RenderingParagraphProps) {
  switch (data.type) {
    case "text":
      return (
        <TextParagraphContainer
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      );
    case "note":
      return (
        <AlertContainer schema={data.scheme} key={data.title}>
          <AlertIcon />
          <AlertContent>
            <AlertTitle>{data.title}</AlertTitle>
            <AlertDescription>{data.content}</AlertDescription>
          </AlertContent>
        </AlertContainer>
      );
    default:
      return <strong>TYPE NOT FOUND</strong>;
  }
}

export { RenderingParagraph };
