import { useForm, FormProvider } from "react-hook-form";
import { createNewArticle } from "../../services/apiArticles";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { objectToFormData } from "../../utils/helpers";
import ArticleTextEditor from "./ArticleTextEditor";
import CategoriesSelect from "./CategoriesSelect";
import useCreateArticle from "./useCreateArticle";

function CreateArticleForm() {
  const methods = useForm();
  const { createArticle } = useCreateArticle();
  const { register, formState, handleSubmit ,setError} = methods;
  const { errors } = formState;
  const submitHandler = (data) => {
    createArticle(
      objectToFormData({
        ...data,
        master_image: data.master_image[0],
      }),
      {
        onError: (err) => {
          console.log(err)
          Object.keys(err).forEach(function (key) {
            setError(key, { message: err[key].join(' ,') });
          });
        },
      }
    );
  };
  console.log(errors);
  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(submitHandler)}>
        <FormRow label={"Article Title"} error={errors?.title?.message}>
          <Input
            type="text"
            id="title"
            {...register("title", {
              required: "Article is required",
            })}
          />
        </FormRow>
        <FormRow label={"Category"} error={errors?.category?.message}>
          <CategoriesSelect />
        </FormRow>

        <FormRow
          label={"Master Image"}
          error={errors?.["master_image"]?.message}>
          <FileInput
            type="file"
            id="img"
            name="icon"
            accept="image/*"
            {...register("master_image", {
              required: "Image is required",
            })}
          />
        </FormRow>
        <FormRow label={"Content"} error={errors?.content?.message}>
          <ArticleTextEditor />
        </FormRow>
        <Button type="submit">Submit</Button>
      </Form>
    </FormProvider>
  );
}

export default CreateArticleForm;
