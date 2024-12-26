import { Badge } from "@arkyn/components";
import { CircleDashed } from "lucide-react";
import { DocStructureType } from "~/client/types";

const badgeJson: DocStructureType = {
  title: "Badge",
  sections: [
    {
      paragraphs: [
        {
          type: "text",
          content: `Small numeric value or status description for fast recognition.`,
        },
      ],
    },
    {
      title: "Import",
      paragraphs: [
        {
          type: "fence",
          language: "js",
          languageType: "typescript",
          content: `import { Badge } from "@arkyn/components";`,
        },
      ],
    },
    {
      title: "Use",
      paragraphs: [
        {
          type: "fence",
          language: "html",
          languageType: "tsx",
          content: `<Badge>Some Text</Badge>`,
        },
        {
          type: "example",
          content: (
            <>
              <Badge>Some Text</Badge>
            </>
          ),
        },
      ],
    },
    {
      title: "Size",
      paragraphs: [
        {
          type: "text",
          content: `Use the <code>size</code> property to change the size of the badge. You can set the value to <code>md</code> or <code>lg</code>.`,
        },
        {
          type: "fence",
          language: "html",
          languageType: "tsx",
          content: `<Badge size="md">Some Text</Badge>
<Badge size="lg">Some Text</Badge>`,
        },
        {
          type: "example",
          content: (
            <>
              <Badge size="md">Some Text</Badge>
              <Badge size="lg">Some Text</Badge>
            </>
          ),
        },
      ],
    },
    {
      title: "Variant",
      paragraphs: [
        {
          type: "text",
          content: `Use the <code>variant</code> property to change the visual style of the emblem. You can set the value to <code>solid</code>, <code>outline</code> or <code>ghost</code>.`,
        },
        {
          type: "fence",
          language: "html",
          languageType: "tsx",
          content: `<Badge variant="solid">Some Text</Badge>
<Badge variant="outline">Some Text</Badge>
<Badge variant="ghost">Some Text</Badge>`,
        },
        {
          type: "example",
          content: (
            <>
              <Badge variant="solid">Some Text</Badge>
              <Badge variant="outline">Some Text</Badge>
              <Badge variant="ghost">Some Text</Badge>
            </>
          ),
        },
      ],
    },
    {
      title: "Scheme",
      paragraphs: [
        {
          type: "text",
          content: `Use the <code>scheme</code> property to change the color scheme of the emblem. You can set the value to <code>danger</code>, <code>info</code>, <code>primary</code>, <code>secondary</code>, <code>success</code> or <code>warning</code>.`,
        },
        {
          type: "note",
          title: "Info",
          content: `The colors are correspondent to the color palette imported from the library configuration.`,
          scheme: "info",
        },
        {
          type: "fence",
          language: "html",
          languageType: "tsx",
          content: `<Badge scheme="danger">Some Text</Badge>
<Badge scheme="info">Some Text</Badge>
<Badge scheme="primary">Some Text</Badge>
<Badge scheme="success">Some Text</Badge>
<Badge scheme="warning">Some Text</Badge>`,
        },
        {
          type: "example",
          content: (
            <>
              <Badge scheme="danger">Some Text</Badge>
              <Badge scheme="info">Some Text</Badge>
              <Badge scheme="primary">Some Text</Badge>
              <Badge scheme="success">Some Text</Badge>
              <Badge scheme="warning">Some Text</Badge>
            </>
          ),
        },
      ],
    },
    {
      title: "Badge with icon",
      paragraphs: [
        {
          type: "text",
          content: `You can add left and right icons to the emblem using the <code>leftIcon</code> and <code>rightIcon</code> props, respectively.`,
        },
        {
          type: "note",
          title: "Warning",
          content: `Values ​​must be elements of <code>LucideIcon</code> type, <strong>not</strong> strings <strong>or</strong> jsx.`,
          scheme: "warning",
        },
        {
          type: "fence",
          language: "html",
          languageType: "tsx",
          content: `<Badge leftIcon={CircleDashed}>Car</Badge>
<Badge rightIcon={CircleDashed} variant="outline">Calc</Badge>`,
        },
        {
          type: "example",
          content: (
            <>
              <Badge leftIcon={CircleDashed}>Car</Badge>
              <Badge rightIcon={CircleDashed} variant="outline">
                Calc
              </Badge>
            </>
          ),
        },
      ],
    },
  ],
};

export { badgeJson };
