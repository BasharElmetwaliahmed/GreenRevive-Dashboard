import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table"
import CategoryRow from "./CategoryRow";
import useCategories from "./useCategories";

function CategoriesTable() {
  const { categories,isLoading} =useCategories();

  if(isLoading) return <Spinner/>

  return <Table columns={"0.6fr 2fr 2.2fr 1fr 2fr "}>
    <Table.Header>
      <th>id</th>
      <th>icon</th>
      <th>category name</th>
      <th>options</th>
      <th></th>

    </Table.Header>
    <Table.Body data={categories} render={(category)=><CategoryRow key={category.id} category={category} />}/>
  </Table>;
}

export default CategoriesTable