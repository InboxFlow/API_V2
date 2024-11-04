import {
  FormController,
  FormError,
  FormLabel,
  Input,
  Select,
} from "@arkyn/components";
import { useLoaderData } from "@remix-run/react";

import { ListChannelLoader } from "~/client/types";
import { ContentContainer } from "./styles";

function Content() {
  const { categories } = useLoaderData<ListChannelLoader>();

  const mappedCategories = categories.map((category) => ({
    label: category.name,
    value: category.id,
  }));

  return (
    <ContentContainer>
      <FormController>
        <FormLabel showAsterisk>Name:</FormLabel>
        <Input type="text" name="name" autoComplete="name" />
        <FormError />
      </FormController>

      <FormController>
        <FormLabel showAsterisk>Category:</FormLabel>
        <Select isSearchable name="categoryId" options={mappedCategories} />
        <FormError />
      </FormController>
    </ContentContainer>
  );
}

export { Content };
