import styled from "styled-components";
import { FaUsers } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { MdOutlineCategory, MdOutlineArticle } from "react-icons/md";

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
`;
const LinkStyled = styled.a`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 1.7rem 1rem;
  font-size: 2rem;
  color: var(--color-grey-600);
  transition: all 0.3s;
  &:hover {
    background-color: var(--color-grey-200);
  }
  &.active {
    background-color: var(--color-grey-200);
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
    </StyledNav>
  );
}

export default NavBar;
