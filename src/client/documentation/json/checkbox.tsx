import { Checkbox } from "@arkyn/components";
import { CircleDashed } from "lucide-react";
import { DocStructureType } from "~/client/types";

const checkboxJson: DocStructureType = {
  title: "Checkbox",
  sections: [
    {
      paragraphs: [
        {
          type: "text",
          content: `A checkbox component is a reusable interface element that encapsulates the functionality of a checkbox input. It usually includes an input box element, a label, and styling. The checkbox input element handles user interaction, while the label provides descriptive text for the option and the styling enhances the visual appearance.`,
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
          content: `import { Checkbox } from "@arkyn/components";`,
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
          content: `<Checkbox name="my-checkbox"/>`,
        },
        {
          type: "example",
          content: (
            <>
              <Checkbox name="my-checkbox" />
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
          content: `Use the <code>size</code> property to change the Checkbox size. You can set the value as <code>lg</code>, <code>md</code> or <code>sm</code>.`,
        },
        {
          type: "fence",
          language: "html",
          languageType: "tsx",
          content: `<Checkbox name="lg-checkbox" size="lg" />
<Checkbox name="md-checkbox" size="md" />
<Checkbox name="sm-checkbox" size="sm" />`,
        },
        {
          type: "example",
          content: (
            <>
              <Checkbox name="lg-checkbox" size="lg" />
              <Checkbox name="md-checkbox" size="md" />
              <Checkbox name="sm-checkbox" size="sm" />
            </>
          ),
        },
      ],
    },

    {
      title: "isError",
      paragraphs: [
        {
          type: "text",
          content: `Use the <code>isError</code> property to change the Checkbox in error state.`,
        },
        {
          type: "fence",
          language: "html",
          languageType: "tsx",
          content: `<Checkbox isError name="error-lg-checkbox" size="lg" />
<Checkbox isError name="error-md-checkbox" size="md" />
<Checkbox isError name="error-sm-checkbox" size="sm" />`,
        },
        {
          type: "example",
          content: (
            <>
              <Checkbox isError name="error-lg-checkbox" size="lg" />
              <Checkbox isError name="error-md-checkbox" size="md" />
              <Checkbox isError name="error-sm-checkbox" size="sm" />
            </>
          ),
        },
      ],
    },
  ],
};

export { checkboxJson };
