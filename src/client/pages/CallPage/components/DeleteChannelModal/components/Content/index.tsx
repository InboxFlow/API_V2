import { useOverlay } from "../../../../context";
import { ContentContainer } from "./styles";

function Content() {
  const { modalData } = useOverlay().deleteChannelModal;

  return (
    <ContentContainer>
      <p>
        You are about to delete the channel <strong>{modalData?.name}</strong>?
      </p>
    </ContentContainer>
  );
}

export { Content };
