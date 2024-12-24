import { ReactNode } from "react";
import { V2LayoutHeaderNavigationContainer } from "./styles";

type V2LayoutHeaderNavigationArgs = {
  children: ReactNode;
};

function V2LayoutHeaderNavigation(args: V2LayoutHeaderNavigationArgs) {
  return (
    <V2LayoutHeaderNavigationContainer>
      {args.children}
    </V2LayoutHeaderNavigationContainer>
  );
}

export { V2LayoutHeaderNavigation };
