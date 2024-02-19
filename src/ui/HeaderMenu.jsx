import styled from "styled-components";
import ButtonIcon from "./ButtonIcon";
// import { HiOutlineUser } from "react-icons";
import { useNavigate } from "react-router-dom";
import LogoutButton from "../features/authentication/LogoutButton";

const StyledList = styled.ul`
  display: flex;
  align-items: center;
  gap:2.4rem;
`;
function HeaderMenu() {
  const navigate = useNavigate();
  return (
    <StyledList>

      <li>
        <LogoutButton />
      </li>
    </StyledList>
  );
}

export default HeaderMenu;
