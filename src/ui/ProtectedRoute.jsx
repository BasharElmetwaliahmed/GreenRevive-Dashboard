import { useEffect } from "react";
import { useNavigate ,Outlet } from "react-router-dom";
import styled from "styled-components";
import useCurrentUser from "../features/authentication/useCurrentUser";

const FullPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function ProtectedRoute({children}) {
  const navigate = useNavigate();
  const { isAuthenticated } = useCurrentUser();

  useEffect(() => {
    if (!isAuthenticated) navigate("/login");
  }, [isAuthenticated, navigate]);


  if (isAuthenticated) return  children;
}

export default ProtectedRoute;
