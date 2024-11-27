import { IconButton, TableBody, Tooltip } from "@arkyn/components";
import { formatToEllipsis } from "@arkyn/shared";
import { useLoaderData } from "@remix-run/react";
import { Eye } from "lucide-react";

import { ErrorLogLoader } from "~/client/types";
import { extractUrlFromJson } from "~/main/services/extractUrlFromJson";

import { useOverlay } from "../../../../context";
import { MethodBadge } from "../../../MethodBadge";

import { ActionsColumnContainer } from "./styles";

function Body() {
  const { errorLogs } = useLoaderData<ErrorLogLoader>();
  const { openModal } = useOverlay().viewErrorLogModal;

  return (
    <TableBody emptyMessage="No data added.">
      {errorLogs.data.map((errorLog) => (
        <tr key={errorLog.id}>
          <td>
            <MethodBadge method={errorLog.method} />
          </td>
          <td>{formatToEllipsis(extractUrlFromJson(errorLog.request), 100)}</td>
          <td>{errorLog.formattedCreatedAt}</td>

          <ActionsColumnContainer>
            <div>
              <Tooltip text="View details" orientation="left">
                <IconButton
                  icon={Eye}
                  variant="invisible"
                  size="sm"
                  aria-label="View errorLog details"
                  onClick={() => openModal(errorLog)}
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
