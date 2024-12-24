import { ReactNode } from "react";
import { V2LayoutSidebarContainer } from "./styles";

type V2LayoutSidebarProps = {
  children: ReactNode;
};

function V2LayoutSidebar(props: V2LayoutSidebarProps) {
  const { children } = props;
  return <V2LayoutSidebarContainer>{children}</V2LayoutSidebarContainer>;
}

export { V2LayoutSidebar };
