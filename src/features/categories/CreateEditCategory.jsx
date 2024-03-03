import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Textarea from "../../ui/Textarea";
import { objectToFormData } from "../../utils/helpers";
import useCreateCategory from "./useCreateCategory";
import useUpdateCategory from "./useUpdateCategory";
import {toast } from 'react-hot-toast'
function CreateEditCategoryForm({ edit, onCloseModal }) {
  const { register, formState, handleSubmit } = useForm({
    defaultValues: {
      ...edit,
    },
  });
  const { createNewCategory, isLoading: createLoading } = useCreateCategory();
  const queryClient = useQueryClient();

  const { updateCategory, isLoading: updatingLoading } = useUpdateCategory();
  const loading = createLoading || updatingLoading;
  const { errors } = formState;
  function submitHandler(data) {
    let form;
    if (typeof data.icon !== "string") {
      form = {
        ...data,
        icon: data.icon[0],
      };
    } else {
      form = {
        name: data.name,
        description: data.description,
      };
    }
    if (!edit) {
      createNewCategory(objectToFormData(form), {
        onSuccess: () => {
          toast.success("Category Created Successfully");
          queryClient.invalidateQueries({
            queryKey: ["categories"],
          });
          onCloseModal();
        },
      });
    } else {
      updateCategory(
        {
          id: edit.id,
          updatedCategory: objectToFormData(form),
        },
        {
          onSuccess: () => {
            toast.success("Category Updated Successfully");
            queryClient.invalidateQueries({
              queryKey: ["categories"],
            });
            onCloseModal();

          },
        }
      );
    }
  }
  return (
    <Form onSubmit={handleSubmit(submitHandler)} type="modal">
      <FormRow label={"Category name"} error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          {...register("name", {
            required: "Category Name is required",
          })}
        />
      </FormRow>
      <FormRow
        label={"Category Description"}
        error={errors?.description?.message}>
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
            required: !edit ? "Icon is required" : false,
          })}
        />
      </FormRow>
      <Button type="submit" disabled={loading}>
        Submit
      </Button>
    </Form>
  );
}

export default CreateEditCategoryForm;
