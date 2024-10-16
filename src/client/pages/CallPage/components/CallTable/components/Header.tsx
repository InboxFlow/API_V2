import { TableHeader } from "@arkyn/components";

function Header() {
  return (
    <TableHeader>
      <th></th>
      <th>Method</th>
      <th>Request</th>
      <th>Response</th>
      <th>Created at</th>
      <th>Actions</th>
    </TableHeader>
  );
}

export { Header };
