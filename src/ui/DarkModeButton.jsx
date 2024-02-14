import ButtonIcon from "./ButtonIcon"
import {HiOutlineMoon, HiOutlineSun} from 'react-icons/hi2'
import { useDarkMode } from "../context/DarkModeContext"

function DarkModeButton() {
    const {toggle,isDarkMode} =useDarkMode()
  return (
    <ButtonIcon onClick={toggle}>
        {isDarkMode?<HiOutlineMoon />:<HiOutlineSun/>}
    </ButtonIcon>
  )
}

export default DarkModeButton