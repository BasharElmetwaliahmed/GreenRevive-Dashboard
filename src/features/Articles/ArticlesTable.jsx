import Empty from "../../ui/Empty";
import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import ArticleRow from "./ArticleRow";
import useArticles from "./useArticles";

function ArticlesTable() {
  const { articles, isLoading } = useArticles();
  if (isLoading) return <Spinner />;
  if (!articles.data) return <Empty resource={"Articles"} />;

  return (
    <>
      <Table columns={"0.3fr 4.5fr 2.2fr 1fr 2fr "}>
        <Table.Header>
          <th>id</th>
          <th>title</th>
          <th>master_img</th>
          <th>actions</th>
        </Table.Header>
        <Table.Body
          data={articles.data}
          render={(article) => <ArticleRow key={article.id} article={article} />}
        />
        <Table.Footer>
          {articles.total && <Pagination count={articles.total} />}
        </Table.Footer>
      </Table>
    </>
  );
}

export default ArticlesTable;
