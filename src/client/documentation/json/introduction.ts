import { DocStructureType } from "~/client/types";

const introductionJson: DocStructureType = {
  title: "Introduction",
  sections: [
    {
      paragraphs: [
        {
          type: "text",
          content: `Arkyn is a speed-focused component library for React + Remix, built for rapid website creation. With it, you can have websites with instant loading, high performance and an improved developer experience, all using the best of technology with Bun and Vite.`,
        },
        {
          type: "text",
          content: `Library is divided into 5 packages to facilitate its development: <br /> <code>@arkyn/api</code> with hooks to consume APIs; <br /> <code>@arkyn/components</code> with ready-to-use UI/UX components; <br /> <code>@arkyn/server</code> with server-side functions; <br /> <code>@arkyn/shared</code> with shared types and utilities; <br /> <code>@arkyn/types</code> with types for TypeScript.`,
        },
        {
          type: "text",
          content: `This modular organization makes it easy to import the packages you need, making your code cleaner and more organized, creating a great integration with Remix that only loads what is imported in its route, so, "bye" unused code!`,
        },
      ],
    },
  ],
};

export { introductionJson };
