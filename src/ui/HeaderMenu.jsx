import styled from "styled-components";
import ButtonIcon from "./ButtonIcon";
// import { HiOutlineUser } from "react-icons";
import { useNavigate } from "react-router-dom";
import LogoutButton from "../features/authentication/LogoutButton";
import { useDarkMode } from "../context/DarkModeProvider";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

const StyledList = styled.ul`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`;
function HeaderMenu() {
  const navigate = useNavigate();
  const { darkMode, setDarkMode } = useDarkMode();
  return (
    <StyledList>
      <li>
        <ButtonIcon onClick={setDarkMode}>{darkMode ? <IoSunnyOutline /> : <IoMoonOutline />}</ButtonIcon>
      </li>
      <li>
        <LogoutButton />
      </li>
    </StyledList>
  );
}

export default HeaderMenu;
