import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Heading from "../ui/Heading";

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
        <Button onClick={() => navigate("/articles/create")}>
          Create New Article
        </Button>
      </Container>
    </div>
  );
}

export default Articles;
