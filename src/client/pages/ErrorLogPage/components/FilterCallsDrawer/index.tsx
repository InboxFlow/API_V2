import {
  Button,
  DrawerContainer,
  DrawerHeader,
  FormController,
  FormLabel,
  Select,
  Textarea,
  useScopedParams,
} from "@arkyn/components";
import { useLocation, useNavigate } from "@remix-run/react";
import { REQUEST_METHODS, REQUEST_STATUS_OPTIONS } from "~/app/template";
import { useOverlay } from "../../context";
import { FilterErrorLogsDrawerContent } from "./styles";

function FilterErrorLogsDrawer() {
  const { closeDrawer, drawerIsOpen } = useOverlay().filterErrorLogsDrawer;

  const { getParam } = useScopedParams();
  const { search } = useLocation();
  const navigate = useNavigate();

  const existingSearchParams = search !== "";
  const handleClearParams = () => {
    navigate("");
    closeDrawer();
  };

  const requestMappedOptions = REQUEST_METHODS.map((method) => ({
    label: method,
    value: method,
  }));

  const statusMappedOptions = REQUEST_STATUS_OPTIONS.map((status) => ({
    label: status.value + " - " + status.label,
    value: status.value + "",
  }));

  return (
    <DrawerContainer
      orientation="right"
      isVisibled={drawerIsOpen}
      makeInvisible={closeDrawer}
    >
      <DrawerHeader>Filter errorLogs</DrawerHeader>

      <FilterErrorLogsDrawerContent>
        <FormController>
          <FormLabel>Method</FormLabel>
          <Select
            name="method"
            defaultValue={getParam("method")}
            options={requestMappedOptions}
          />
        </FormController>

        <FormController>
          <FormLabel>Status</FormLabel>
          <Select
            name="status"
            isSearchable
            defaultValue={getParam("status")}
            options={statusMappedOptions}
          />
        </FormController>

        <FormController>
          <FormLabel>Request</FormLabel>
          <Textarea
            name="request"
            defaultValue={getParam("request")}
            rows={6}
          />
        </FormController>

        <FormController>
          <FormLabel>Response</FormLabel>
          <Textarea
            name="response"
            defaultValue={getParam("response")}
            rows={6}
          />
        </FormController>

        <Button onClick={closeDrawer}>Filter</Button>

        {existingSearchParams && (
          <Button
            variant="ghost"
            scheme="danger"
            type="button"
            onClick={handleClearParams}
          >
            Limpar
          </Button>
        )}
      </FilterErrorLogsDrawerContent>
    </DrawerContainer>
  );
}

export { FilterErrorLogsDrawer };
