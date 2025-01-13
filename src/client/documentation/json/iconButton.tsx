import { IconButton } from "@arkyn/components";
import { Banana, Car, CircleDashed } from "lucide-react";
import { DocStructureType } from "~/client/types";

const iconButtonJson: DocStructureType = {
  title: "IconButton",
  sections: [
    {
      paragraphs: [
        {
          type: "text",
          content: `An icon is a graphic representation of meaning. Icons can be used to express actions, states and even to categorize data.`,
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
          content: `import { IconButton } from "@arkyn/components";`,
        },
      ],
    },
    {
      title: "Label",
      paragraphs: [
        {
          type: "text",
          content: `Since icon buttons do not contain descriptive content, it is <strong>mandatory</strong> to use the <code>aria-label</code> property, this property will give the button a description about its functionality, allowing people with visual problems to use your website normally.`,
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
          content: `<IconButton icon={CircleDashed} aria-label="Demo button" />`,
        },
        {
          type: "example",
          content: <IconButton icon={CircleDashed} aria-label="Demo button" />,
        },
      ],
    },
    {
      title: "Size",
      paragraphs: [
        {
          type: "text",
          content: `Use the <code>size</code> property to change the button size. You can set the value as <code>xs</code>, <code>sm</code>, <code>md</code> or <code>lg</code>.`,
        },
        {
          type: "fence",
          language: "html",
          languageType: "tsx",
          content: `<IconButton size="lg" aria-label="Demo Button" icon={CircleDashed} />
<IconButton size="md" aria-label="Demo Button" icon={CircleDashed} />
<IconButton size="sm" aria-label="Demo Button" icon={CircleDashed} />
<IconButton size="xs" aria-label="Demo Button" icon={CircleDashed} />`,
        },
        {
          type: "example",
          content: (
            <>
              <IconButton
                size="lg"
                aria-label="Demo Button"
                icon={CircleDashed}
              />
              <IconButton
                size="md"
                aria-label="Demo Button"
                icon={CircleDashed}
              />
              <IconButton
                size="sm"
                aria-label="Demo Button"
                icon={CircleDashed}
              />
              <IconButton
                size="xs"
                aria-label="Demo Button"
                icon={CircleDashed}
              />
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
          content: `Use the <code>variant</code> property to change the visual style of the button. You can set the value to <code>solid</code>, <code>outline</code>,<code>ghost</code> or <code>invisible</code>.`,
        },
        {
          type: "fence",
          language: "html",
          languageType: "tsx",
          content: `<IconButton variant="solid" aria-label="Demo button" icon={Car} />
<IconButton variant="outline" aria-label="Demo button" icon={Car} />
<IconButton variant="ghost" aria-label="Demo button" icon={Car} />
<IconButton variant="invisible" aria-label="Demo button" icon={Car} />`,
        },
        {
          type: "example",
          content: (
            <>
              <IconButton variant="solid" aria-label="Demo button" icon={Car} />
              <IconButton
                variant="outline"
                aria-label="Demo button"
                icon={Car}
              />
              <IconButton variant="ghost" aria-label="Demo button" icon={Car} />
              <IconButton
                variant="invisible"
                aria-label="Demo button"
                icon={Car}
              />
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
          content: `Use the <code>scheme</code> property to change the color scheme of the button. You can set the value to <code>danger</code>, <code>primary</code>, <code>success</code> and <code>warning</code>.`,
        },
        {
          type: "note",
          content:
            "The colors are correspondent to the color palette imported from the library configuration.",
          scheme: "info",
          title: "Info",
        },
        {
          type: "fence",
          language: "html",
          languageType: "tsx",
          content: `<IconButton scheme="danger" icon={Banana} aria-label="Demo Button" />
<IconButton scheme="primary" icon={Banana} aria-label="Demo Button" />
<IconButton scheme="success" icon={Banana} aria-label="Demo Button" />
<IconButton scheme="warning" icon={Banana} aria-label="Demo Button" />`,
        },
        {
          type: "example",
          content: (
            <>
              <IconButton
                scheme="danger"
                icon={Banana}
                aria-label="Demo Button"
              />
              <IconButton
                scheme="primary"
                icon={Banana}
                aria-label="Demo Button"
              />
              <IconButton
                scheme="success"
                icon={Banana}
                aria-label="Demo Button"
              />
              <IconButton
                scheme="warning"
                icon={Banana}
                aria-label="Demo Button"
              />
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
          content: `Use the <code>isLoading</code> property to show your loading status.`,
        },

        {
          type: "fence",
          language: "html",
          languageType: "tsx",
          content: `<IconButton isLoading aria-label="Demo button" icon={Car} />`,
        },
        {
          type: "example",
          content: (
            <>
              <IconButton isLoading aria-label="Demo button" icon={Car} />
            </>
          ),
        },
      ],
    },
  ],
};

export { iconButtonJson };
