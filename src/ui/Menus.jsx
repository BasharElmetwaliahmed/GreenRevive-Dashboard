/* eslint-disable react/prop-types */

import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import useClickOutSide from "../hooks/useClickOutSide";

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledToggle = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`;

const StyledList = styled.ul`
  position: fixed;

  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  right: ${(props) => props.position.x}px;
  top: ${(props) => props.position.y}px;
`;

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`;
const MenusContext = createContext();

const Menus = ({ children }) => {
  const [openedId, setOpenedId] = useState("");
  const [position, setPostion] = useState(null);
  const open = setOpenedId;
  const close = () => setOpenedId("");

  return (
    <MenusContext.Provider
      value={{ open, openedId, close, position, setPostion }}>
      {children}
    </MenusContext.Provider>
  );
};

const Toggle = ({ id }) => {
  const { openedId, close, open, setPostion } = useContext(MenusContext);

  function toggleHandler(e) {
     e.stopPropagation()
    const rect = e.target.closest("button").getBoundingClientRect();
    setPostion({
      x: window.innerWidth - rect.x - rect.width,
      y:rect.y+rect.height+8
    });
    openedId === "" || !openedId === id ? open(id) : close();
  }

  return <StyledToggle onClick={toggleHandler}>...</StyledToggle>;
};

const List = ({ id, children }) => {
  const { openedId, position,close } = useContext(MenusContext);
    const { ref } = useClickOutSide(close,false);


  if (openedId !== id) return;

  return createPortal(
    <StyledList position={position} ref={ref}>{children}</StyledList>,
    document.body
  );
};

const Button = ({ children,click ,icon}) => {
  const { close } = useContext(MenusContext);
  function handleClick() {
    click?.();
    close();
  }
  return (
    <li>
      <StyledButton onClick={handleClick}>
        {icon}
        <span>{children}</span>
      </StyledButton>
    </li>
  );
};
Menus.List = List;
Menus.Button = Button;
Menus.Toggle = Toggle;
Menus.Menu = Menu;
export default Menus;
