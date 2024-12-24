import { LucideIcon } from "lucide-react";

import { BaseHeaderButtonContainer } from "./styles";

type BaseHeaderButtonArgs = {
  icon: LucideIcon;
  ariaLabel: string;
  onClick?: () => void;
  isLoading?: boolean;
};

function BaseHeaderButton(args: BaseHeaderButtonArgs) {
  const { icon: Icon, onClick, isLoading, ariaLabel } = args;

  return (
    <BaseHeaderButtonContainer
      icon={Icon}
      aria-label={ariaLabel}
      onClick={onClick}
      isLoading={isLoading}
      variant="outline"
      size="sm"
    />
  );
}

export { BaseHeaderButton };
