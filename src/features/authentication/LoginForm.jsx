import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { objectToFormData } from "../../utils/helpers";
import useLogin from "./useLogin.js";

function LoginForm() {
  const { register, formState, handleSubmit, setError } = useForm();
  const { login } = useLogin();
  const errors = formState.errors;
  function submitHandler(data) {
    login(objectToFormData(data), {
      onError: (err) => {
        if (err.message) toast.error(err.message);
        else
          Object.keys(err).forEach(function (key) {
            console.log(key);
            setError(key, { message: err[key] });
          });
      },
    });
  }
  return (
    <Form onSubmit={handleSubmit(submitHandler)}>
      <FormRow label="email" error={errors?.email?.message}>
        <Input
          type="email"
          name="email"
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
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
      <Button>Login</Button>
    </Form>
  );
}

export default LoginForm;
