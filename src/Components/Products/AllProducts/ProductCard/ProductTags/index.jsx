import { ProductTagsContainer, Tag } from "./index.styles";

function ProductTags(data) {
  return (
    <ProductTagsContainer>
      {data.tags.map((tag) => {
        return <Tag key={tag}>{tag}</Tag>;
      })}
    </ProductTagsContainer>
  );
}

export default ProductTags;
