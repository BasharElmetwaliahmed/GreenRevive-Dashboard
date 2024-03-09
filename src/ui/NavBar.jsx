import styled from "styled-components";
import { FaUsers } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { MdOutlineCategory, MdOutlineArticle } from "react-icons/md";
import { GrUserSettings } from "react-icons/gr";

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  padding:0rem 1rem;
  gap:1rem;
`;
const LinkStyled = styled.a`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 1.7rem 1rem;
  border-radius: 0.7rem;

  font-size: 2rem;
  color: var(--color-grey-600);
  transition: all 0.3s;
  &:hover {
    background-color: var(--color-grey-200);
  }
  &.active {
    background-color: var(--color-grey-200);
  }
  &:hover svg {
    color: var(--color-brand-600);
  }
  &.active svg {
    color: var(--color-brand-600);
  }
`;
function NavBar() {
  return (
    <StyledNav>
      <LinkStyled as={NavLink} to="/users">
        <FaUsers />
        Users/Roles
      </LinkStyled>
      <LinkStyled as={NavLink} to="/categories">
        <MdOutlineCategory />
        Categories
      </LinkStyled>
      <LinkStyled as={NavLink} to="/articles">
        <MdOutlineArticle />
        Articles
      </LinkStyled>
      <LinkStyled as={NavLink} to="/usersettings">
        <GrUserSettings/>
        User Settings
      </LinkStyled>
    </StyledNav>
  );
}

export default NavBar;
