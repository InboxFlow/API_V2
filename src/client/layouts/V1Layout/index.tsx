import { Outlet } from "@remix-run/react";

import { ProgressBar } from "~/client/components";

import { MenuConfig } from "./components/MenuButtons/MenuConfig";
import { MenuUser } from "./components/MenuButtons/MenuUser";
import { V1LayoutHeader } from "./components/V1LayoutHeader";
import { V1LayoutHeaderLogo } from "./components/V1LayoutHeaderLogo";
import { V1LayoutHeaderNavigation } from "./components/V1LayoutHeaderNavigation";

import { Container } from "./styles";

function V1Layout() {
  return (
    <Container>
      <ProgressBar />

      <V1LayoutHeader>
        <V1LayoutHeaderLogo />
        <V1LayoutHeaderNavigation>
          <MenuConfig />
          <MenuUser />
        </V1LayoutHeaderNavigation>
      </V1LayoutHeader>

      <Outlet />
    </Container>
  );
}

export { V1Layout };
