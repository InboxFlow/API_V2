import { ReactNode } from "react";

type TextParagraphType = {
  type: "text";
  content: string;
};

type ExampleParagraphType = {
  type: "example";
  content: ReactNode;
};

type FenceParagraphType = {
  type: "fence";
  content: string;
  languageType?: string;
  language?:
    | "markup"
    | "html"
    | "xml"
    | "svg"
    | "mathml"
    | "ssml"
    | "atom"
    | "rss"
    | "css"
    | "clike"
    | "javascript"
    | "js"
    | "abap"
    | "abnf"
    | "actionscript"
    | "ada"
    | "agda"
    | "al"
    | "antlr4"
    | "g4"
    | "apacheconf"
    | "apex"
    | "apl"
    | "applescript"
    | "aql"
    | "arduino"
    | "ino";
};

type NoteParagraphType = {
  type: "note";
  scheme: "success" | "danger" | "warning" | "info";
  title: string;
  content: string;
};

type ParagraphType =
  | TextParagraphType
  | NoteParagraphType
  | ExampleParagraphType
  | FenceParagraphType;

type SectionType = {
  title?: string;
  paragraphs: ParagraphType[];
};

type DocStructureType = {
  title: string;
  sections: SectionType[];
};

export type {
  DocStructureType,
  ExampleParagraphType,
  FenceParagraphType,
  NoteParagraphType,
  ParagraphType,
  TextParagraphType,
};
