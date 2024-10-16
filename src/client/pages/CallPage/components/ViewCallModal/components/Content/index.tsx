import { useOverlay } from "../../../../context";
import { MethodBadge } from "../../../MethodBadge";
import { ContentContainer } from "./styles";

function Content() {
  const { modalData } = useOverlay().viewCallModal;
  if (!modalData) return <></>;

  const formatJson = (jsonString: string) => {
    try {
      const jsonObject = JSON.parse(jsonString);
      return JSON.stringify(jsonObject, null, 2);
    } catch (error) {
      return jsonString;
    }
  };

  return (
    <ContentContainer>
      <div className="lineContainer">
        <strong>Method:</strong>
        <MethodBadge method={modalData.method} />
      </div>

      <div className="lineContainer">
        <strong>Date:</strong>
        <p>{modalData.formattedCreatedAt}</p>
      </div>

      <div className="columnContainer">
        <strong>Request:</strong>
        <pre>
          <code>{formatJson(modalData.request)}</code>
        </pre>
      </div>

      <div className="columnContainer">
        <strong>Response:</strong>
        <pre>
          <code>{formatJson(modalData.response)}</code>
        </pre>
      </div>
    </ContentContainer>
  );
}

export { Content };
