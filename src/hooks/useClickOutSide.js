import { useEffect, useRef } from "react";

function useClickOutSide(close,ClickCaputring=true) {
  const ref = useRef();

  useEffect(() => {
    function clickOutSide(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        close();
      }
    }

    document.addEventListener("click", clickOutSide, ClickCaputring);

    return () => document.removeEventListener("click", clickOutSide, true);
  }, [close]);
  return { ref };
}

export default useClickOutSide;
