import styled from "styled-components";
import Light from "../data/img/logo-light.png";
import Dark from "../data/img/logo-dark.png";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const { isDarkMode } = useDarkMode();
  return (
    <StyledLogo>
      <Img src={isDarkMode ? Dark : Light} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
