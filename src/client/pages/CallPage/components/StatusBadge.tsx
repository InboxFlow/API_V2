import { Badge } from "@arkyn/components";

type StatusBadgeProps = {
  status: number;
};

function StatusBadge({ status }: StatusBadgeProps) {
  if (status >= 100 && status < 200) {
    return <Badge scheme="info">{status}</Badge>;
  }

  if (status >= 200 && status < 300) {
    return <Badge scheme="success">{status}</Badge>;
  }

  if (status >= 300 && status < 400) {
    return <Badge scheme="warning">{status}</Badge>;
  }

  if (status >= 400 && status < 500) {
    return <Badge scheme="danger">{status}</Badge>;
  }

  if (status >= 500) {
    return <Badge scheme="danger">{status}</Badge>;
  }
}

export { StatusBadge };
