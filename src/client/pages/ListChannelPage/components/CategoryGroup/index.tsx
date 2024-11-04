import { useLoaderData } from "@remix-run/react";
import { ListChannelLoader } from "~/client/types";

import { CategoryCard } from "../CategoryCard";
import { CategoryGroupContainer } from "./styles";

function CategoryGroup() {
  const { categories } = useLoaderData<ListChannelLoader>();

  return (
    <CategoryGroupContainer>
      {categories.map((category) => (
        <CategoryCard key={category.id} data={category} />
      ))}
    </CategoryGroupContainer>
  );
}

export { CategoryGroup };
