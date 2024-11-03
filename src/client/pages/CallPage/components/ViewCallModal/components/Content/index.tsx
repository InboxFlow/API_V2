import { extractUrlFromJson } from "~/main/services/extractUrlFromJson";

import { useOverlay } from "../../../../context";
import { MethodBadge } from "../../../MethodBadge";
import { StatusBadge } from "../../../StatusBadge";
import { formatJsonString } from "./functions";
import { ContentContainer } from "./styles";

function Content() {
  const { modalData } = useOverlay().viewCallModal;
  if (!modalData) return <></>;

  return (
    <ContentContainer>
      <div className="lineContainer">
        <strong>Method:</strong>
        <MethodBadge method={modalData.method} />
      </div>

      <div className="lineContainer">
        <strong>Status:</strong>
        <StatusBadge status={modalData.status} />
      </div>

      <div className="lineContainer">
        <strong>URL:</strong>
        <p>{extractUrlFromJson(modalData.request)}</p>
      </div>

      <div className="lineContainer">
        <strong>Date:</strong>
        <p>{modalData.formattedCreatedAt}</p>
      </div>

      <div className="columnContainer">
        <strong>Request:</strong>
        <pre>
          <code>{formatJsonString(modalData.request)}</code>
        </pre>
      </div>

      <div className="columnContainer">
        <strong>Response:</strong>
        <pre>
          <code>{formatJsonString(modalData.response)}</code>
        </pre>
      </div>
    </ContentContainer>
  );
}

export { Content };
