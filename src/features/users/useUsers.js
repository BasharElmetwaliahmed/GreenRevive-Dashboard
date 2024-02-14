import { useQuery } from "@tanstack/react-query";
import { getUserApi } from "../../services/apiUser";
import useCurrentUser from "../authentication/useCurrentUser";

function useUsers() {
  const { user } = useCurrentUser();
  const { data: users, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn:()=>{return getUserApi(JSON.parse(localStorage.getItem("user")).token)},
  });

  return { users, isLoading };
}

export default useUsers;
