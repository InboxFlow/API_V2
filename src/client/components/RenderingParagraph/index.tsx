import {
  AlertContainer,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@arkyn/components";

import { ParagraphType } from "~/client/types";
import { TextParagraphContainer, ExampleParagraphContainer } from "./styles";
import { Fence } from "../Fence";

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
            <AlertDescription
              dangerouslySetInnerHTML={{ __html: data.content }}
            ></AlertDescription>
          </AlertContent>
        </AlertContainer>
      );
    case "example":
      return (
        <ExampleParagraphContainer>{data.content}</ExampleParagraphContainer>
      );
    case "fence":
      return <Fence data={data} />;
    default:
      return <strong>TYPE NOT FOUND</strong>;
  }
}

export { RenderingParagraph };
