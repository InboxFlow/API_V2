import { DocStructureType } from "~/client/types";

const getStartedJson: DocStructureType = {
  title: "Get started",
  sections: [
    {
      paragraphs: [
        {
          type: "text",
          content: `The following packages are configured independently, requiring separate installation. They all depend on the <code>@arkyn/types</code> package, so it should be installed before any other, especially if you are using TypeScript.`,
        },
        {
          type: "text",
          content: `Dependencies in Arkyn are specified as <code>peerDependencies</code>, which requires installation in projects. This avoids redundancies and gives more control over what is installed, making it easier for the programmer to use dependencies.`,
        },
      ],
    },
  ],
};

export { getStartedJson };
