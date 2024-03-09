import styled from "styled-components";
import {useSearchParams} from 'react-router-dom'
import Select from "../../ui/Select";
import useCategories from "../categories/useCategories";

const ArticleOperationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
function ArticlesOperation() {
  const { categories, isLoading } = useCategories();
  const [searchParam, setSearchParam] = useSearchParams();

  if (isLoading) return null;
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

    function handleFilter(e) {
      searchParam.set('category', e.target.value);
      if (searchParam.get("page")) {
        searchParam.set("page", 1);
      }
      setSearchParam(searchParam);
    }
    let filterValue = searchParam.get('category') || CategoriesList[0].value;
  return (
    <ArticleOperationContainer>
      <h3>Category</h3>
      <Select
        options={CategoriesList}
        onChange={handleFilter}
        filterField="category">
        {CategoriesList.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </ArticleOperationContainer>
  );
}

export default ArticlesOperation;
