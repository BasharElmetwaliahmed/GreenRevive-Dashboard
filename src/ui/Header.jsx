import styled from "styled-components"
import UserAvatar from "../features/authentication/UserAvatar"
import HeaderMenu from "./HeaderMenu"


const HeaderStyled=styled.header`
    background-color: var(--color-grey-0);
    padding: 2rem;
    display:flex;
    justify-content: flex-end;
    gap: 4.6rem;

`
function Header() {
  return (
    <HeaderStyled>
      <UserAvatar/>
      <HeaderMenu/>
    </HeaderStyled>
  )
}

export default Header