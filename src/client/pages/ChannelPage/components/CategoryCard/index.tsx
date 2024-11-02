import { IconButton } from "@arkyn/components";
import { useLoaderData } from "@remix-run/react";
import { Pen, Trash } from "lucide-react";

import { CategoryModel } from "~/client/models";
import { ChannelLoader } from "~/client/types";

import { useOverlay } from "../../context";
import { ChannelCard } from "../ChannelCard";
import { CategoryCardContainer } from "./styles";

type CategoryCardProps = {
  data: CategoryModel;
};

function CategoryCard(props: CategoryCardProps) {
  const { name, id } = props.data;

  const { channels } = useLoaderData<ChannelLoader>();
  const { deleteCategoryModal, updateCategoryModal } = useOverlay();

  return (
    <CategoryCardContainer>
      <header>
        <strong>{name}</strong>

        <div>
          <IconButton
            aria-label="Edit category"
            variant="invisible"
            size="sm"
            scheme="warning"
            icon={Pen}
            onClick={() => updateCategoryModal.openModal(props.data)}
          />

          <IconButton
            aria-label="Delete category"
            variant="invisible"
            size="sm"
            scheme="danger"
            icon={Trash}
            onClick={() => deleteCategoryModal.openModal(props.data)}
          />
        </div>
      </header>

      <ul>
        {channels
          .filter((channel) => channel.categoryId === id)
          .map((channel) => (
            <ChannelCard key={channel.id} data={channel} />
          ))}
      </ul>
    </CategoryCardContainer>
  );
}

export { CategoryCard };
