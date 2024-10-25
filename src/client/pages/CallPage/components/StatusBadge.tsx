import { Badge } from "@arkyn/components";
import { REQUEST_STATUS_OPTIONS } from "~/app/template";

type StatusBadgeProps = {
  status: number;
};

function StatusBadge({ status }: StatusBadgeProps) {
  function getStatusName(status: number) {
    const option = REQUEST_STATUS_OPTIONS.find(
      (option) => option.value === status
    );

    return option?.label || "Unknown";
  }

  if (status >= 100 && status < 200) {
    return (
      <Badge scheme="info">
        {status} - {getStatusName(status)}
      </Badge>
    );
  }

  if (status >= 200 && status < 300) {
    return (
      <Badge scheme="success">
        {status} - {getStatusName(status)}
      </Badge>
    );
  }

  if (status >= 300 && status < 400) {
    return (
      <Badge scheme="warning">
        {status} - {getStatusName(status)}
      </Badge>
    );
  }

  if (status >= 400 && status < 500) {
    return (
      <Badge scheme="danger">
        {status} - {getStatusName(status)}
      </Badge>
    );
  }

  if (status >= 500) {
    return (
      <Badge scheme="danger">
        {status} - {getStatusName(status)}
      </Badge>
    );
  }
}

export { StatusBadge };
