import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import useCreateUser from "./useCreateUser";
import { objectToFormData } from "../../utils/helpers";

function CreateUser() {
  const { register, formState, getValues, handleSubmit, setError } = useForm();
  const { createNewUser } = useCreateUser();
  const { errors } = formState;
  function submitHandler(data) {
    console.log(data);
    createNewUser(
      objectToFormData({
        name: data.name,
        email: data.email,
        password: data.password,
      }),
      {
        onError: (err) => {
          Object.keys(err).forEach(function (key) {
            setError(key, { message: err[key] });
          });
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit(submitHandler)}>
      <FormRow label="name" error={errors?.name?.message}>
        <Input
          type="text"
          name="name"
          id="name"
          {...register("name", {
            required: "Name is required",
          })}
        />
      </FormRow>
      <FormRow label="email" error={errors?.email?.message}>
        <Input
          type="email"
          name="email"
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              message: "Please enter a valid email address",
            },
          })}
        />
      </FormRow>
      <FormRow label="password" error={errors?.password?.message}>
        <Input
          type="password"
          name="password"
          id="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "min length of password 8",
            },
          })}
        />
      </FormRow>
      <FormRow
        label="confirm password"
        error={errors?.confirmpassword?.message}>
        <Input
          type="password"
          name="confirmPassword"
          id="password"
          {...register("confirmpassword", {
            required: "Confirm Password is required",
            minLength: {
              value: 8,
              message: "min length of password 8",
            },
            validate: (value) =>
              value === getValues().password || "Passwords must be matched",
          })}
        />
      </FormRow>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default CreateUser;
