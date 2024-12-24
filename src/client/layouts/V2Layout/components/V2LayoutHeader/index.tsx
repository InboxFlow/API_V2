import { ReactNode } from "react";
import { V2LayoutHeaderContainer } from "./styles";

type V2LayoutHeaderArgs = {
  children: ReactNode;
};

function V2LayoutHeader(args: V2LayoutHeaderArgs) {
  const { children } = args;
  return <V2LayoutHeaderContainer>{children}</V2LayoutHeaderContainer>;
}

export { V2LayoutHeader };
