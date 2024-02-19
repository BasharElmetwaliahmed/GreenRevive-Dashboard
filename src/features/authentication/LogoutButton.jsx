import useLogout from "./useLogout"
import { CiLogout } from "react-icons/ci";
import styled from "styled-components";
const StyledLogout = styled.button`
  background-color: transparent;
  font-weight: 600;
  font-size: 3rem;
  color: var(var(--color-grey-600));
  padding: 1.2rem;
   border-radius: 50%;
  border: none;
  &:hover{
    background-color: var(--color-grey-200);
  }
`;

function LogoutButton() {
    const {logOut}  = useLogout()
  return (
    <StyledLogout onClick={logOut} >
      <CiLogout/>
    </StyledLogout>
  )
}

export default LogoutButton