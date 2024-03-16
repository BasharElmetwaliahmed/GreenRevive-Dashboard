import { useEffect } from "react";
import { useNavigate, Outlet,useLocation } from "react-router-dom";
import styled from "styled-components";
import useCurrentUser from "../features/authentication/useCurrentUser";

const FullPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useCurrentUser();
  const location =useLocation()
  useEffect(() => {
    if (!isAuthenticated) navigate("/login");
    if (user?.role === "coordinator" && location.pathname !== "/usersettings") {
      navigate("/");
    }
  }, [isAuthenticated, navigate, user]);

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
