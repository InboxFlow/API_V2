import { Badge } from "@arkyn/components";

type MethodBadgeProps = {
  method: string;
};

function MethodBadge({ method }: MethodBadgeProps) {
  switch (method) {
    case "GET":
      return <Badge scheme="success">GET</Badge>;
    case "POST":
      return <Badge scheme="warning">POST</Badge>;
    case "PATCH":
      return <Badge scheme="primary">PATCH</Badge>;
    case "PUT":
      return <Badge scheme="info">PUT</Badge>;
    case "DELETE":
      return <Badge scheme="danger">DELETE</Badge>;
  }
}

export { MethodBadge };
