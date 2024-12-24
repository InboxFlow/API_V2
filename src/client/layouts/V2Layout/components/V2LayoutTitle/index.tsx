import { V2LayoutTitleContainer } from "./styles";

type V2LayoutTitleProps = {
  label: string;
};

function V2LayoutTitle(args: V2LayoutTitleProps) {
  return <V2LayoutTitleContainer>{args.label}</V2LayoutTitleContainer>;
}

export { V2LayoutTitle };
