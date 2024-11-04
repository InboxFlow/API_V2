import { formatJsonString } from "@arkyn/shared";

import { extractUrlFromJson } from "~/main/services/extractUrlFromJson";

import { useOverlay } from "../../../../context";
import { MethodBadge } from "../../../MethodBadge";
// import { StatusBadge } from "../../../StatusBadge";
import { ContentContainer } from "./styles";

function Content() {
  const { modalData } = useOverlay().viewErrorLogModal;
  if (!modalData) return <></>;

  return (
    <ContentContainer>
      <div className="lineContainer">
        <strong>Method:</strong>
        <MethodBadge method={modalData.method} />
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
        <strong>Error:</strong>
        <pre>
          <code>{formatJsonString(modalData.message)}</code>
        </pre>
      </div>

      <div className="columnContainer">
        <strong>Request:</strong>
        <pre>
          <code>{formatJsonString(modalData.request)}</code>
        </pre>
      </div>

      <div className="columnContainer">
        <strong>Params:</strong>
        <pre>
          <code>{formatJsonString(modalData.params)}</code>
        </pre>
      </div>
    </ContentContainer>
  );
}

export { Content };
