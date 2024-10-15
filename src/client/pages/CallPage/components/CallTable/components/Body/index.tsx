import { IconButton, TableBody, Tooltip } from "@arkyn/components";
import { useLoaderData, useNavigate } from "@remix-run/react";
import { Edit2, Eye, Trash2 } from "lucide-react";

import { CallLoader } from "~/client/types";

import { ActionsColumnContainer } from "./styles";

function Body() {
  const { calls } = useLoaderData<CallLoader>();

  const navigate = useNavigate();
  function navigateToCalls(channelId: string) {
    navigate(`/client/v1/calls/${channelId}`);
  }

  return (
    <TableBody emptyMessage="No data added.">
      {calls.data.map((call) => (
        <tr key={call.id}>
          <td>{call.method}</td>
          <td>{call.request.substring(0, 20)}</td>
          <td>{call.response.substring(0, 20)}</td>

          <ActionsColumnContainer>
            <div>
              <Tooltip text="View calls" orientation="left">
                <IconButton
                  icon={Eye}
                  variant="invisible"
                  size="sm"
                  aria-label="Open delete event host modal"
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
