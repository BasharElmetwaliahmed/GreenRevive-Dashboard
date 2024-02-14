import useLogout from "./useLogout"

function LogoutButton() {
    const {logOut}  = useLogout()
  return (
    <button onClick={logOut} >Logout</button>
  )
}

export default LogoutButton