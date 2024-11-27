import { IconButton, TableBody, Tooltip } from "@arkyn/components";
import { formatToEllipsis } from "@arkyn/shared";
import { useLoaderData } from "@remix-run/react";
import { Eye } from "lucide-react";

import { CallLoader } from "~/client/types";
import { extractUrlFromJson } from "~/main/services/extractUrlFromJson";

import { useOverlay } from "../../../../context";
import { MethodBadge } from "../../../MethodBadge";
import { StatusBadge } from "../../../StatusBadge";

import { ActionsColumnContainer } from "./styles";

function Body() {
  const { calls } = useLoaderData<CallLoader>();
  const { openModal } = useOverlay().viewCallModal;

  return (
    <TableBody emptyMessage="No data added.">
      {calls.data.map((call) => (
        <tr key={call.id}>
          <td>
            <MethodBadge method={call.method} />
          </td>
          <td>
            <StatusBadge status={call.status} />
          </td>
          <td>{formatToEllipsis(extractUrlFromJson(call.request), 100)}</td>
          <td>{call.formattedCreatedAt}</td>

          <ActionsColumnContainer>
            <div>
              <Tooltip text="View details" orientation="left">
                <IconButton
                  icon={Eye}
                  variant="invisible"
                  size="sm"
                  aria-label="View call details"
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
