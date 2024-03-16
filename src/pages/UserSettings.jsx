import ChangePasswordForm from "../features/usersettings/ChangePasswordForm"
import DeleteAccount from "../features/usersettings/DeleteAccount"

function UserSettings() {
  return (
    <div>
      <DeleteAccount/>
      <ChangePasswordForm/>
    </div>
  )
}

export default UserSettings