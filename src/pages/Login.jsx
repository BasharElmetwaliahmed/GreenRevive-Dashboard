import LoginForm from "../features/authentication/LoginForm";
import styled from "styled-components";
import { Navigate } from "react-router-dom";
import useCurrentUser from "../features/authentication/useCurrentUser";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  align-content: center;
  justify-content: center;

  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

function Login() {
  const { isAuthenticated } = useCurrentUser();
  if (isAuthenticated) return <Navigate  to='/' />;
  return (
    <LoginLayout>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
