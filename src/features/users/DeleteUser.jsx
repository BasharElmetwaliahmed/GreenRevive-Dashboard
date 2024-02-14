import useDeleteUser from "./useDeleteUser"

function DeleteUser({id}) {
    console.log(id)
    const { deleteUser  , isDeleting} = useDeleteUser();
   function handleDelete(){
        if(confirm('are you sure you want to delete')){
            deleteUser(id)
        }
    }
  return (
    <button onClick={handleDelete} >DeleteUser</button>
  )
}

export default DeleteUser