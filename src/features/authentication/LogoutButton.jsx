import useLogout from "./useLogout";
import { CiLogout } from "react-icons/ci";
import styled from "styled-components";
import ButtonIcon from "../../ui/ButtonIcon";
const StyledLogout = styled.button`
  background-color: transparent;
  font-weight: 600;
  font-size: 3rem;
  color: var(var(--color-grey-600));
  padding: 1.2rem;
  border-radius: 50%;
  border: none;
  &:hover {
    background-color: var(--color-grey-200);
  }
`;

function LogoutButton() {
  const { logOut, isLoading } = useLogout();
  return (
    <ButtonIcon disabled={isLoading} onClick={logOut}>
      <CiLogout />
    </ButtonIcon>
  );
}

export default LogoutButton;
