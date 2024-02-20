import { useForm } from "react-hook-form";
import useCreateCategory from "../features/categories/useCreateCategory";
import Button from "../ui/Button";
import FileInput from "../ui/FileInput";
import Form from "../ui/Form";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import { objectToFormData } from "../utils/helpers";

function CreateCategoryForm() {
  const { register, formState, handleSubmit } = useForm();
  const {createNewCategory} = useCreateCategory()
  const { errors } = formState;
  function submitHandler(data) {
    if(edit )
    createNewCategory(objectToFormData({
     ...data,
     icon: data.icon[0]  
    }))
  }
  return (
    <Form onSubmit={handleSubmit(submitHandler)}>
      <FormRow label={"Category name"} error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          {...register("name", {
            required: "Category Name is required",
          })}
        />
      </FormRow>
      <FormRow label={"Category Description"} error={errors?.description?.message}>
        <Textarea
          type="text"
          id="description"
          {...register("description", {
            required: "Description is required",
          })}
        />
      </FormRow>
      <FormRow label={"Category image"} error={errors?.icon?.message}>
        <FileInput
          type="file"
          id="img"
          name="icon"
          accept="image/*"
          {...register("icon", {
            required: "Icon is required",
          })}
        />
      </FormRow>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default CreateCategoryForm;
