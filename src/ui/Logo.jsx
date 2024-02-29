import styled from "styled-components";
import GlobalLogo from "../assets/logo/logo_new.png";

const StyledLogo = styled.div`
  text-align: center;
  font-size: 8rem;
  color: green;
  padding: 2rem;
`;

const Img = styled.img`
  height: 15rem;

`;

function Logo() {
  return (
    <StyledLogo>
      <Img src={GlobalLogo} alt="global logo" />
    </StyledLogo>
  );
}

export default Logo;
