import { Button } from "@arkyn/components";
import { Calculator, CarFront } from "lucide-react";
import { DocStructureType } from "~/client/types";

const buttonJson: DocStructureType = {
  title: "Button",
  sections: [
    {
      paragraphs: [
        {
          type: "text",
          content: `A button means an operation (or a series of operations). Clicking on a button will trigger the corresponding business logic.`,
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
          content: `import { Button } from "@arkyn/components";`,
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
          content: `<Button>Some Text</Button>`,
        },
        {
          type: "example",
          content: <Button>Some Text</Button>,
        },
      ],
    },
    {
      title: "Size",
      paragraphs: [
        {
          type: "text",
          content: `Use the <code>size</code> property to change the button size. You can set the value as <code>lg</code>, <code>md</code>, <code>sm</code> or <code>xs</code>.`,
        },
        {
          type: "fence",
          language: "html",
          languageType: "tsx",
          content: `<Button size="lg">Some Text</Button>
<Button size="md">Some Text</Button>
<Button size="sm">Some Text</Button>
<Button size="xs">Some Text</Button>`,
        },
        {
          type: "example",
          content: (
            <>
              <Button size="lg">Some Text</Button>
              <Button size="md">Some Text</Button>
              <Button size="sm">Some Text</Button>
              <Button size="xs">Some Text</Button>
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
          content: ` Use the <code>variant</code> property to change the visual style of the button. You can set the value to <code>solid</code>, <code>outline</code>,<code>ghost</code> or <code>invisible</code>.`,
        },
        {
          type: "fence",
          language: "html",
          languageType: "tsx",
          content: `<Button variant="solid">Some Text</Button>
<Button variant="outline">Some Text</Button>
<Button variant="ghost">Some Text</Button>
<Button variant="invisible">Some Text</Button>`,
        },
        {
          type: "example",
          content: (
            <>
              <Button variant="solid">Some Text</Button>
              <Button variant="outline">Some Text</Button>
              <Button variant="ghost">Some Text</Button>
              <Button variant="invisible">Some Text</Button>
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
          content: `Use the <code>scheme</code> property to change the color scheme of the button. You can set the value to <code>danger</code>, <code>primary</code>, <code>success</code> and <code>warning</code>. <br/> The colors are correspondent to the color palette imported from the library configuration.`,
        },
        {
          type: "fence",
          language: "html",
          languageType: "tsx",
          content: `<Button scheme="danger">Some Text</Button>
<Button scheme="primary">Some Text</Button>
<Button scheme="success">Some Text</Button>
<Button scheme="warning">Some Text</Button>`,
        },
        {
          type: "example",
          content: (
            <>
              <Button scheme="danger">Some Text</Button>
              <Button scheme="primary">Some Text</Button>
              <Button scheme="success">Some Text</Button>
              <Button scheme="warning">Some Text</Button>
            </>
          ),
        },
      ],
    },
    {
      title: "Button with icon",
      paragraphs: [
        {
          type: "text",
          content: `  You can add left and right icons to the button using the <code>leftIcon</code> and <code>rightIcon</code> props, respectively.`,
        },
        {
          type: "note",
          title: "Warning",
          scheme: "warning",
          content: `Values ​​must be elements of <code>LucideIcon</code> type, <strong>not</strong> strings, <strong>or</strong> jsx.`,
        },
        {
          type: "fence",
          language: "html",
          languageType: "tsx",
          content: `<Button leftIcon={CarFront}>Look the car</Button>
<Button rightIcon={Calculator} variant="outline">Calculate</Button>`,
        },
        {
          type: "example",
          content: (
            <>
              <Button leftIcon={CarFront}>Look the car</Button>
              <Button rightIcon={Calculator} variant="outline">
                Calculate
              </Button>
            </>
          ),
        },
      ],
    },
    {
      title: "Loading",
      paragraphs: [
        {
          type: "text",
          content: `Use the <code>isLoading</code> property to show your loading status. By default, the button will show a spinner and will leave the button width unchanged. <br /> You can also add the <code>loadingText</code> property to add text while loading.`,
        },
        {
          type: "note",
          title: "Warning",
          scheme: "warning",
          content: ` If <code>loadingText</code> is larger than the inserted text + icon on
        the button itself, the button width characteristic will not be ignored,
        causing the button to grow in size.`,
        },
        {
          type: "fence",
          language: "html",
          languageType: "tsx",
          content: `<Button isLoading>Some Text</Button>
<Button isLoading loadingText="Loading...">
  Add Text
</Button>`,
        },
        {
          type: "example",
          content: (
            <>
              <Button isLoading>Some Text</Button>
              <Button isLoading loadingText="Loading...">
                Add Text
              </Button>
            </>
          ),
        },
      ],
    },
  ],
};

export { buttonJson };
