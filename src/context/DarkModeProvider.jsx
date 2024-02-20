import { useEffect } from "react";
import { createContext, useContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const DarkModeContext = createContext();
function DarkModeProvider({children}) {
  const [darkMode, setDarkMode] = useLocalStorageState(false, "mode");
  useEffect(()=>{
    if (darkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  },[darkMode])
  return (
    <DarkModeContext.Provider
      value={{ darkMode, setDarkMode: () => setDarkMode(!darkMode) }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);

  return context;
};

export default DarkModeProvider;
