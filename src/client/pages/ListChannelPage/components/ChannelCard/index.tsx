import { ChannelModel } from "~/client/models";
import { ChannelCardContainer } from "./styles";

type ChannelCardProps = {
  data: ChannelModel;
};

function ChannelCard(props: ChannelCardProps) {
  const { name, callsCount, errorLogsCount, formattedCreatedAt, id } =
    props.data;

  return (
    <ChannelCardContainer
      prefetch="intent"
      to={`/client/v1/channel/${id}/calls`}
    >
      <div>
        <strong>{name}</strong>
        <small>{formattedCreatedAt}</small>
      </div>

      <p>
        {callsCount} - <span>{errorLogsCount}</span>
      </p>
    </ChannelCardContainer>
  );
}

export { ChannelCard };
