import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import ProtectedRoute from "./ProtectedRoute";
import SideBar from "./SideBar";

const AppLayoutStyled = styled.div`
  display: grid;
  grid-template-columns: 25rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;
const MainStyled = styled.main`
  background-color: var(--color-grey-50);
  border-left: 1px solid var(--color-grey-100);
  padding: 4rem 4.6rem 6rem;
`;
const Container = styled.div`
  margin: 0 auto;
  max-width: 120rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

function AppLayout() {
  console.log("AppLayout");
  return (
    <>
      <ProtectedRoute>
        <AppLayoutStyled>
          <Header />
          <SideBar />
          <MainStyled>
            <Container>
              <Outlet />
            </Container>
          </MainStyled>
        </AppLayoutStyled>
      </ProtectedRoute>
    </>
  );
}

export default AppLayout;
