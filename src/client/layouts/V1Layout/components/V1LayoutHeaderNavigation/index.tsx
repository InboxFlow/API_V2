import { ReactNode } from "react";
import { V1LayoutHeaderNavigationContainer } from "./styles";

type V1LayoutHeaderNavigationArgs = {
  children: ReactNode;
};

function V1LayoutHeaderNavigation(args: V1LayoutHeaderNavigationArgs) {
  return (
    <V1LayoutHeaderNavigationContainer>
      {args.children}
    </V1LayoutHeaderNavigationContainer>
  );
}

export { V1LayoutHeaderNavigation };
