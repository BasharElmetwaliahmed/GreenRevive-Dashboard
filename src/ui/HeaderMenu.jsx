import styled from "styled-components";
import ButtonIcon from "./ButtonIcon";
// import { HiOutlineUser } from "react-icons";
import { useNavigate } from "react-router-dom";
import Logout from "../features/authentication/Logout";
import DarkModeButton from "./DarkModeButton";

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
        <ButtonIcon onClick={() => navigate("/account")}>
          {/* <HiOutlineUser /> */}
          Account
        </ButtonIcon>
      </li>
      <li>
        <DarkModeButton/>
      </li>
      <li>
        <Logout />
      </li>
    </StyledList>
  );
}

export default HeaderMenu;
