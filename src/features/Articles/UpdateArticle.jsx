import FileInput from "../../ui/FileInput";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import { objectToFormData } from "../../utils/helpers";
import useEditArticle from "./useEditArticle";

function UpdateArticle({ id, onCloseModal }) {
  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;
  const { updateArticle, isLoading } = useEditArticle();
  function submitHandler(data) {
    updateArticle({
      updatedArticle: objectToFormData({
        master_image: data.icon[0],
      }),
      id,
    },{
      onSuccess:()=>{
        onCloseModal()
      }
    });
  }
  console.log(isLoading);
  return (
    <Form type="modal" onSubmit={handleSubmit(submitHandler)}>
      <FormRow label={"Master Image"} error={errors?.icon?.message}>
        <FileInput
          type="file"
          id="img"
          name="icon"
          accept="image/*"
          {...register("icon", {
            required: "Master Image is required",
          })}
        />
      </FormRow>
      <Button type="submit" disabled={isLoading}>
        Submit
      </Button>
    </Form>
  );
}

export default UpdateArticle;
