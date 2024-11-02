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

  const loaderData = useLoaderData<ChannelLoader>();
  const { deleteCategoryModal, updateCategoryModal } = useOverlay();

  const channels = loaderData.channels.filter(
    ({ categoryId }) => categoryId === id
  );

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
            disabled={channels.length > 0}
            title={channels.length > 0 ? "Category has channels" : ""}
            onClick={() => deleteCategoryModal.openModal(props.data)}
          />
        </div>
      </header>

      <ul>
        {channels.map((channel) => (
          <ChannelCard key={channel.id} data={channel} />
        ))}
      </ul>
    </CategoryCardContainer>
  );
}

export { CategoryCard };
