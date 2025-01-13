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
          <V2LayoutNavLink label="AudioUpload" to="/audio-upload" />
          <V2LayoutNavLink label="Badge" to="/badge" />
          <V2LayoutNavLink label="Breadcrumb" to="/breadcrumb" />
          <V2LayoutNavLink label="Button" to="/button" />
          <V2LayoutNavLink label="Card" to="/card" />
          <V2LayoutNavLink label="Checkbox" to="/checkbox" />
          <V2LayoutNavLink label="ClientOnly" to="/client-only" />
          <V2LayoutNavLink label="Divider" to="/divider" />
          <V2LayoutNavLink label="Drawer" to="/drawer" />
          <V2LayoutNavLink label="Form" to="/form" />
          <V2LayoutNavLink label="GoogleMap" to="/google-map" />
          <V2LayoutNavLink
            label="GoogleSearchPlaces"
            to="/google-search-places"
          />
          <V2LayoutNavLink label="GoogleTagManager" to="/google-tag-manager" />
          <V2LayoutNavLink label="IconButton" to="/icon-button" />
          <V2LayoutNavLink label="ImageUpload" to="/image-upload" />
          <V2LayoutNavLink label="Input" to="/input" />
          <V2LayoutNavLink label="Modal" to="/modal" />
          <V2LayoutNavLink label="MultiSelect" to="/multi-select" />
          <V2LayoutNavLink label="Pagination" to="/pagination" />
          <V2LayoutNavLink label="Popover" to="/popover" />
          <V2LayoutNavLink label="Radio" to="/radio" />
          <V2LayoutNavLink label="RichText" to="/rich-text" />
          <V2LayoutNavLink label="Select" to="/select" />
          <V2LayoutNavLink label="Skeleton" to="/skeleton" />
          <V2LayoutNavLink label="Slider" to="/slider" />
          <V2LayoutNavLink label="Switch" to="/switch" />
          <V2LayoutNavLink label="Table" to="/table" />
          <V2LayoutNavLink label="Tabs" to="/tabs" />
          <V2LayoutNavLink label="Textarea" to="/textarea" />
          <V2LayoutNavLink label="Tooltip" to="/tooltip" />
        </V2LayoutNavGroup>

        <V2LayoutNavGroup label="Hooks">
          <V2LayoutNavLink label="useAutomation" to="/use-automation" />
          <V2LayoutNavLink label="useDrawer" to="/use-drawer" />
          <V2LayoutNavLink label="useFieldErrors" to="/use-field-errors" />
          <V2LayoutNavLink label="useHydrated" to="/use-hydrated" />
          <V2LayoutNavLink label="useModal" to="/use-modal" />
          <V2LayoutNavLink label="useScopedParams" to="/use-scoped-params" />
          <V2LayoutNavLink label="useToast" to="/use-toast" />
        </V2LayoutNavGroup>

        <V2LayoutNavGroup label="Providers">
          <V2LayoutNavLink label="DrawerProvider" to="/drawer-provider" />
          <V2LayoutNavLink label="GoogleProvider" to="/google-provider" />
          <V2LayoutNavLink label="ModalProvider" to="/modal-provider" />
          <V2LayoutNavLink label="ToastProvider" to="/toast-provider" />
        </V2LayoutNavGroup>

        <V2LayoutNavGroup label="Services">
          <V2LayoutNavLink
            label="getHtmlFromRichTextValue"
            to="/get-html-from-rich-text-value"
          />
          <V2LayoutNavLink
            label="getRichTextValueFromHtml"
            to="/get-rich-text-value-from-html"
          />
          <V2LayoutNavLink label="isHtml" to="/is-html" />
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

        <V2LayoutNavGroup label="Helpers">
          <V2LayoutNavLink label="globalErrorHandler" to="/alert" />
        </V2LayoutNavGroup>

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
