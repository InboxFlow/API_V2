import { TableHeader } from "@arkyn/components";

function Header() {
  return (
    <TableHeader>
      <th>Name</th>
      <th>Call's count</th>
      <th>Created at</th>
      <th>Actions</th>
    </TableHeader>
  );
}

export { Header };
