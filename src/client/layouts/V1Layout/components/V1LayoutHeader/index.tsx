import { ReactNode } from "react";
import { V1LayoutHeaderContainer } from "./styles";

type V1LayoutHeaderArgs = {
  children: ReactNode;
};

function V1LayoutHeader(args: V1LayoutHeaderArgs) {
  const { children } = args;
  return (
    <V1LayoutHeaderContainer>
      <div>{children}</div>
    </V1LayoutHeaderContainer>
  );
}

export { V1LayoutHeader };
