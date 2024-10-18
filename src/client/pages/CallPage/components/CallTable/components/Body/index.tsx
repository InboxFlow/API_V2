import { IconButton, TableBody, Tooltip } from "@arkyn/components";
import { useLoaderData } from "@remix-run/react";
import { Eye } from "lucide-react";

import { CallLoader } from "~/client/types";

import { useOverlay } from "../../../../context";
import { MethodBadge } from "../../../MethodBadge";
import { ActionsColumnContainer } from "./styles";

function Body() {
  const { calls } = useLoaderData<CallLoader>();
  const { openModal } = useOverlay().viewCallModal;

  function appendEllipsis(text: string) {
    return text.length > 40 ? `${text.substring(0, 40)}...` : text;
  }

  return (
    <TableBody emptyMessage="No data added.">
      {calls.data.map((call) => (
        <tr key={call.id}>
          <td>
            <MethodBadge method={call.method} />
          </td>
          <td>{appendEllipsis(call.request)}</td>
          <td>{appendEllipsis(call.response)}</td>
          <td>{call.formattedCreatedAt}</td>

          <ActionsColumnContainer>
            <div>
              <Tooltip text="View calls" orientation="left">
                <IconButton
                  icon={Eye}
                  variant="invisible"
                  size="sm"
                  aria-label="View call modal"
                  onClick={() => openModal(call)}
                />
              </Tooltip>
            </div>
          </ActionsColumnContainer>
        </tr>
      ))}
    </TableBody>
  );
}

export { Body };
