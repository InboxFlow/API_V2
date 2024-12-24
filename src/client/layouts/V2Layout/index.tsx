import { Outlet } from "@remix-run/react";

import { ProgressBar } from "~/client/components";

import { MenuConfig } from "./components/MenuButtons/MenuConfig";
import { MenuUser } from "./components/MenuButtons/MenuUser";
import { V2LayoutHeader } from "./components/V2LayoutHeader";
import { V2LayoutHeaderLogo } from "./components/V2LayoutHeaderLogo";
import { V2LayoutHeaderNavigation } from "./components/V2LayoutHeaderNavigation";
import { V2LayoutNavLink } from "./components/V2LayoutNavLink";
import { V2LayoutSidebar } from "./components/V2LayoutSidebar";

import { V2LayoutNavGroup } from "./components/V2LayoutNavGroup";
import { V2LayoutTitle } from "./components/V2LayoutTitle";
import { Container } from "./styles";

function V2Layout() {
  return (
    <Container>
      <ProgressBar />

      <V2LayoutHeader>
        <V2LayoutHeaderLogo />
        <V2LayoutHeaderNavigation>
          <MenuConfig />
          <MenuUser />
        </V2LayoutHeaderNavigation>
      </V2LayoutHeader>

      <V2LayoutSidebar>
        <V2LayoutNavLink label="Introduction" to="/introduction" />
        <V2LayoutNavLink label="Get started" to="/get-started" />

        <V2LayoutTitle label="@arkyn/api" />

        <V2LayoutNavLink label="Instance" to="/instance" />
        <V2LayoutNavLink label="monitoringErrors" to="/monitoring-errors" />

        <V2LayoutTitle label="@arkyn/components" />

        <V2LayoutNavGroup label="Components">
          <V2LayoutNavLink label="Alert" to="/alert" />
          <V2LayoutNavLink label="AudioUpload" to="/alert" />
          <V2LayoutNavLink label="Badge" to="/alert" />
          <V2LayoutNavLink label="Breadcrumb" to="/alert" />
          <V2LayoutNavLink label="Button" to="/alert" />
          <V2LayoutNavLink label="Card" to="/alert" />
          <V2LayoutNavLink label="Checkbox" to="/alert" />
          <V2LayoutNavLink label="ClientOnly" to="/alert" />
          <V2LayoutNavLink label="Divider" to="/alert" />
          <V2LayoutNavLink label="Drawer" to="/alert" />
          <V2LayoutNavLink label="Form" to="/alert" />
          <V2LayoutNavLink label="GoogleMap" to="/alert" />
          <V2LayoutNavLink label="GoogleSearchPlaces" to="/alert" />
          <V2LayoutNavLink label="GoogleTagManager" to="/alert" />
          <V2LayoutNavLink label="IconButton" to="/alert" />
          <V2LayoutNavLink label="ImageUpload" to="/alert" />
          <V2LayoutNavLink label="Input" to="/alert" />
          <V2LayoutNavLink label="Modal" to="/alert" />
          <V2LayoutNavLink label="MultiSelect" to="/alert" />
          <V2LayoutNavLink label="Pagination" to="/alert" />
          <V2LayoutNavLink label="Popover" to="/alert" />
          <V2LayoutNavLink label="Radio" to="/alert" />
          <V2LayoutNavLink label="RichText" to="/alert" />
          <V2LayoutNavLink label="Select" to="/alert" />
          <V2LayoutNavLink label="Skeleton" to="/alert" />
          <V2LayoutNavLink label="Slider" to="/alert" />
          <V2LayoutNavLink label="Switch" to="/alert" />
          <V2LayoutNavLink label="Table" to="/alert" />
          <V2LayoutNavLink label="Tabs" to="/alert" />
          <V2LayoutNavLink label="Textarea" to="/alert" />
          <V2LayoutNavLink label="Tooltip" to="/alert" />
        </V2LayoutNavGroup>

        <V2LayoutNavGroup label="Hooks">
          <V2LayoutNavLink label="useAutomation" to="/alert" />
          <V2LayoutNavLink label="useDrawer" to="/alert" />
          <V2LayoutNavLink label="useFieldErrors" to="/alert" />
          <V2LayoutNavLink label="useHydrated" to="/alert" />
          <V2LayoutNavLink label="useModal" to="/alert" />
          <V2LayoutNavLink label="useScopedParams" to="/alert" />
          <V2LayoutNavLink label="useToast" to="/alert" />
        </V2LayoutNavGroup>

        <V2LayoutNavGroup label="Providers">
          <V2LayoutNavLink label="DrawerProvider" to="/alert" />
          <V2LayoutNavLink label="GoogleProvider" to="/alert" />
          <V2LayoutNavLink label="ModalProvider" to="/alert" />
          <V2LayoutNavLink label="ToastProvider" to="/alert" />
        </V2LayoutNavGroup>

        <V2LayoutNavGroup label="Services">
          <V2LayoutNavLink label="getHtmlFromRichTextValue" to="/alert" />
          <V2LayoutNavLink label="getRichTextValueFromHtml" to="/alert" />
          <V2LayoutNavLink label="isHtml" to="/alert" />
        </V2LayoutNavGroup>

        <V2LayoutTitle label="@arkyn/server" />

        <V2LayoutNavGroup label="Bad Responses">
          <V2LayoutNavLink label="BadRequestError" to="/alert" />
          <V2LayoutNavLink label="ConflictError" to="/alert" />
          <V2LayoutNavLink label="ForbiddenError" to="/alert" />
          <V2LayoutNavLink label="NotFoundError" to="/alert" />
          <V2LayoutNavLink label="ServerError" to="/alert" />
          <V2LayoutNavLink label="UnauthorizedError" to="/alert" />
          <V2LayoutNavLink label="UnprocessableEntityError" to="/alert" />
        </V2LayoutNavGroup>

        <V2LayoutNavLink label="globalErrorHandler" to="/alert" />

        <V2LayoutNavGroup label="Services">
          <V2LayoutNavLink label="extractJsonFromRequest" to="/alert" />
          <V2LayoutNavLink label="formParse" to="/alert" />
          <V2LayoutNavLink label="getScopedParams" to="/alert" />
          <V2LayoutNavLink label="sendFileToS3" to="/alert" />
        </V2LayoutNavGroup>

        <V2LayoutTitle label="@arkyn/shared" />

        <V2LayoutNavGroup label="Formats">
          <V2LayoutNavLink label="formatBrazilianDateToDate" to="/alert" />
          <V2LayoutNavLink label="formatDateHour" to="/alert" />
          <V2LayoutNavLink label="formatJsonObject" to="/alert" />
          <V2LayoutNavLink label="formatJsonString" to="/alert" />
          <V2LayoutNavLink label="formatToBRL" to="/alert" />
          <V2LayoutNavLink label="formatToCep" to="/alert" />
          <V2LayoutNavLink label="formatToCNPJ" to="/alert" />
          <V2LayoutNavLink label="formatToCPF" to="/alert" />
          <V2LayoutNavLink label="formatToCpfCnpj" to="/alert" />
          <V2LayoutNavLink label="formatToEllipsis" to="/alert" />
          <V2LayoutNavLink label="formatToHiddenDigits" to="/alert" />
          <V2LayoutNavLink label="formatToPhone" to="/alert" />
        </V2LayoutNavGroup>

        <V2LayoutNavGroup label="Generators">
          <V2LayoutNavLink label="generateColorByString" to="/alert" />
          <V2LayoutNavLink label="generateId" to="/alert" />
          <V2LayoutNavLink label="generateSlug" to="/alert" />
        </V2LayoutNavGroup>

        <V2LayoutNavGroup label="Parsers">
          <V2LayoutNavLink label="parseToCharacters" to="/alert" />
        </V2LayoutNavGroup>

        <V2LayoutNavGroup label="Services">
          <V2LayoutNavLink label="calculateCardInstallment" to="/alert" />
          <V2LayoutNavLink label="maskSensitiveData" to="/alert" />
          <V2LayoutNavLink label="normalizeRange" to="/alert" />
          <V2LayoutNavLink label="within" to="/alert" />
          <V2LayoutNavLink label="truncateLargeFields" to="/alert" />
        </V2LayoutNavGroup>

        <V2LayoutNavGroup label="Validations">
          <V2LayoutNavLink label="regex" to="/alert" />
          <V2LayoutNavLink label="validateCPF" to="/alert" />
        </V2LayoutNavGroup>
      </V2LayoutSidebar>

      <Outlet />
    </Container>
  );
}

export { V2Layout };
