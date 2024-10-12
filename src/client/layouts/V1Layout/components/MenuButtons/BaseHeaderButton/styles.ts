import { IconButton } from "@arkyn/components";
import { styled } from "@linaria/react";

const BaseHeaderButtonContainer = styled(IconButton)`
  border-radius: 999px !important;
  border: none !important;

  svg {
    color: var(--text-body) !important;
  }
`;

export { BaseHeaderButtonContainer };
