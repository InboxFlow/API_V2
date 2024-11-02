import { useOverlay } from "../../../../context";
import { ContentContainer } from "./styles";

function Content() {
  const { modalData } = useOverlay().deleteCategoryModal;

  return (
    <ContentContainer>
      <p>
        You are about to delete the category <strong>{modalData?.name}</strong>?
      </p>
    </ContentContainer>
  );
}

export { Content };
