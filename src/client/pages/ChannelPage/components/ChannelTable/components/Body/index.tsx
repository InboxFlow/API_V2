import { IconButton, TableBody, Tooltip } from "@arkyn/components";
import { useLoaderData, useNavigate } from "@remix-run/react";
import { Edit2, Eye, Trash2 } from "lucide-react";

import { ChannelLoader } from "~/client/types";

import { useOverlay } from "../../../../context";
import { ActionsColumnContainer } from "./styles";

function Body() {
  const { channels } = useLoaderData<ChannelLoader>();
  const { updateChannelModal, deleteChannelModal } = useOverlay();

  const navigate = useNavigate();
  function navigateToCalls(channelId: string) {
    navigate(`/client/v1/calls/${channelId}`);
  }

  return (
    <TableBody emptyMessage="No data added.">
      {channels.map((channel, index) => (
        <tr key={channel.id}>
          <td>{channels.length - index}</td>
          <td>{channel.name}</td>
          <td>{channel.formattedCreatedAt}</td>

          <ActionsColumnContainer>
            <div>
              <Tooltip text="Edit channel" orientation="left">
                <IconButton
                  icon={Edit2}
                  variant="invisible"
                  size="sm"
                  scheme="warning"
                  aria-label="Open edit event host modal"
                  onClick={() => updateChannelModal.openModal(channel)}
                />
              </Tooltip>

              <Tooltip text="Delete channel" orientation="left">
                <IconButton
                  icon={Trash2}
                  variant="invisible"
                  size="sm"
                  scheme="danger"
                  aria-label="Open delete event host modal"
                  onClick={() => deleteChannelModal.openModal(channel)}
                />
              </Tooltip>

              <Tooltip text="View calls" orientation="left">
                <IconButton
                  icon={Eye}
                  variant="invisible"
                  size="sm"
                  aria-label="Open delete event host modal"
                  onClick={() => navigateToCalls(channel.id)}
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
