import useCategories from "../categories/useCategories";
import styled from "styled-components";
import { useFormContext } from "react-hook-form";

const StyledSelect = styled.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${(props) =>
      props.type === "white"
        ? "var(--color-grey-100)"
        : "var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`;
function CategoriesSelect() {
  const { categories, isLoading } = useCategories();
  const { register } = useFormContext();
  if (isLoading) return null;
  console.log(categories);
  const CategoriesList = categories.map((category) => {
    return {
      value: category.id,
      label: (
        <div>
          <img
            src={`http://euphoria.puiux.org/${category.icon}`}
            alt={category.name}
          />
          {category.name}
        </div>
      ),
    };
  });
  return (
    <div>
      <StyledSelect {...register('category_id',{
        required:'select category id',
      })}>
        {CategoriesList.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </div>
  );
}

export default CategoriesSelect;
