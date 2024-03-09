import DeleteAccount from "../features/usersettings/DeleteAccount"
import Heading from "../ui/Heading"

function UserSettings() {
  return (
    <div>
      <Heading>Change Password</Heading>
      <DeleteAccount/>
    </div>
  )
}

export default UserSettings