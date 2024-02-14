import styled from "styled-components"
import Uploader from "../data/Uploader"
import Logo from "./Logo"

const SideBarStyled=styled.aside`
    background-color: var(--color-grey-0);
    border-right: 1px solid var(--color-grey-100);
    grid-row: 1/-1;
`
function SideBar() {
  return (
    <SideBarStyled>
      <Logo/>
      <Uploader/>
    </SideBarStyled>
  )
}

export default SideBar