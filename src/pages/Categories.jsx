import CategoriesTable from "../features/categories/CategoriesTable";
import CreateCategoryButton from "../features/categories/CreateCategoryButton";

function Categories() {
  return (
    <div>
      <CreateCategoryButton />
      <CategoriesTable />
    </div>
  );
}

export default Categories;
