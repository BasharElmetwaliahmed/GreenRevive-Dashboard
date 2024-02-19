import styled from "styled-components";


const StyledLogo = styled.div`
  text-align: center;
  font-size: 8rem;
  color: green;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      Green Revive
    </StyledLogo>
  );
}

export default Logo;
