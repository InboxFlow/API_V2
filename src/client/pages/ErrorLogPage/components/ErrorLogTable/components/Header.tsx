import { TableHeader } from "@arkyn/components";

function Header() {
  return (
    <TableHeader>
      <th>Method</th>
      <th>Status</th>
      <th>URL</th>
      <th>Created at</th>
      <th>Actions</th>
    </TableHeader>
  );
}

export { Header };
