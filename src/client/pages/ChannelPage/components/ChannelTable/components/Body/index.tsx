import { IconButton, TableBody, Tooltip } from "@arkyn/components";
import { useLoaderData } from "@remix-run/react";
import { Edit2, Trash2 } from "lucide-react";

import { ChannelLoader } from "~/client/types";

import { useOverlay } from "../../../../context";
import { ActionsColumnContainer } from "./styles";

function Body() {
  const { channels } = useLoaderData<ChannelLoader>();
  const { updateChannelModal, deleteChannelModal } = useOverlay();

  return (
    <TableBody>
      {channels.map((channel) => (
        <tr key={channel.id}>
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
            </div>
          </ActionsColumnContainer>
        </tr>
      ))}
    </TableBody>
  );
}

export { Body };
