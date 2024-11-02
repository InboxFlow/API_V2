import { styled } from "@linaria/react";

const CategoryCardContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    border-bottom: 1px solid var(--border);
    padding-bottom: 10px;

    > div {
      display: flex;
      gap: 4px;
    }
  }

  > ul {
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;

export { CategoryCardContainer };
