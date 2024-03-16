import styled from "styled-components";
import useCurrentUser from "../features/authentication/useCurrentUser";
import HeaderMenu from "./HeaderMenu";

const HeaderStyled = styled.header`
  background-color: var(--color-grey-0);
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4.6rem;
`;
const NameHeader = styled.h2`
  font-size: 2.3rem;
  font-weight: 600;
  color: var(--color-grey-600);
`;
function Header() {
  const { user } = useCurrentUser();
  return (
    <HeaderStyled>
      {user && <NameHeader>Wecome {user.name.split(" ")[0]}!</NameHeader>}
      <HeaderMenu />
    </HeaderStyled>
  );
}

export default Header;
