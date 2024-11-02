import { ChannelModel } from "~/client/models";
import { ChannelCardContainer } from "./styles";

type ChannelCardProps = {
  data: ChannelModel;
};

function ChannelCard(props: ChannelCardProps) {
  const { name, callsCount, formattedCreatedAt, id } = props.data;

  return (
    <ChannelCardContainer prefetch="intent" to={`/client/v1/calls/${id}`}>
      <div>
        <strong>{name}</strong>
        <small>{formattedCreatedAt}</small>
      </div>

      <p>{callsCount}</p>
    </ChannelCardContainer>
  );
}

export { ChannelCard };
