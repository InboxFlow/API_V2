import { ReactNode } from "react";

type TextParagraphType = {
  type: "text";
  content: string;
};

type ExampleParagraphType = {
  type: "example";
  content: ReactNode;
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
  | ExampleParagraphType;

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
  TextParagraphType,
  ExampleParagraphType,
  NoteParagraphType,
  ParagraphType,
};
