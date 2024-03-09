import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Heading from "../ui/Heading";
import ArticlesTable from "../features/Articles/ArticlesTable";
import ArticlesOperation from "../features/Articles/ArticlesOperation";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

`;
function Articles() {
  const navigate = useNavigate();
  return (
    <div>
      <Container>
        <Heading>Articles</Heading>
        <ArticlesOperation/>
        <Button onClick={() => navigate("/articles/create")}>
          Create New Article
        </Button>
      </Container>
      <ArticlesTable />
    </div>
  );
}

export default Articles;
