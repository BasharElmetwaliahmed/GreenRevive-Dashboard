import { useQueryClient } from "@tanstack/react-query";
import  { useEffect, useState } from "react";

function useCurrentUser() {
  const queryClient = useQueryClient();
  const [isAuthenticated,setAuthenticated] = useState(localStorage.getItem("user")?true:false);
  const user = queryClient.getQueryData(['user'])
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  useEffect(() => {
    if (localStorage.getItem("user")){
      setAuthenticated(true);
      queryClient.setQueryData(
        ["user"],
        JSON.parse(localStorage.getItem("user"))
      );
    }
  }, [user]);

  return { isAuthenticated  ,user };
}

export default useCurrentUser;
