import { TableHeader } from "@arkyn/components";

function Header() {
  return (
    <TableHeader>
      <th>Method</th>
      <th>Request</th>
      <th>Response</th>
      <th>Created at</th>
      <th>Actions</th>
    </TableHeader>
  );
}

export { Header };
