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
import { useOverlay } from "../../context";
import { FilterCallsDrawerContent } from "./styles";
import { useLocation, useNavigate } from "@remix-run/react";
import { REQUEST_METHODS, REQUEST_STATUS_OPTIONS } from "~/app/template";

function FilterCallsDrawer() {
  const { closeDrawer, drawerIsOpen } = useOverlay().filterCallsDrawer;

  const { getParam } = useScopedParams();
  const { search } = useLocation();
  const navigate = useNavigate();

  const existingSearchParams = search !== "";
  const handleClearParams = () => {
    navigate("");
    closeDrawer();
  };

  return (
    <DrawerContainer
      orientation="right"
      isVisibled={drawerIsOpen}
      makeInvisible={closeDrawer}
    >
      <DrawerHeader>Filter calls</DrawerHeader>

      <FilterCallsDrawerContent>
        <FormController>
          <FormLabel>Method</FormLabel>
          <Select
            name="method"
            defaultValue={getParam("method")}
            options={REQUEST_METHODS.map((method) => ({
              label: method,
              value: method,
            }))}
          />
        </FormController>

        <FormController>
          <FormLabel>Status</FormLabel>
          <Select
            name="status"
            defaultValue={getParam("status")}
            options={REQUEST_STATUS_OPTIONS.map((status) => ({
              label: status.value + " - " + status.label,
              value: status + "",
            }))}
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
      </FilterCallsDrawerContent>
    </DrawerContainer>
  );
}

export { FilterCallsDrawer };
