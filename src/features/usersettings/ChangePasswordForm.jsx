import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Heading from "../../ui/Heading";
import Input from "../../ui/Input";
import { objectToFormData } from "../../utils/helpers";
import useChangePassword from "./useChangePassword";

function ChangePasswordForm() {
  const { register, formState, handleSubmit, getValues,setError } = useForm({}); 
  const {changePassword,isLoading} =useChangePassword()
    const { errors } = formState;
   function submitHandler(data) {
    changePassword(objectToFormData(data), {
      onSuccess: () => {
        onCloseModal();
      },
      onError: (err) => {
        Object.keys(err).forEach(function (key) {
          setError(key, { message: err[key][0] });
        });
      },
    });   }
  return (
    <>
    <Heading>Change Password</Heading>
      <Form onSubmit={handleSubmit(submitHandler)}>
        <FormRow
          label="current password"
          error={errors?.["current_password"]?.message}>
          <Input
            type="password"
            name="current_password"
            id="password"
            {...register("current_password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "min length of password 8",
              },
            })}
          />
        </FormRow>
        <FormRow label="New password" error={errors?.password?.message}>
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
          label="Confirm password"
          error={errors?.["password_confirmation"]?.message}>
          <Input
            type="password"
            name="password_confirmation"
            id="password"
            {...register("password_confirmation", {
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
        <Button disabled={isLoading}>Change Password</Button>
      </Form>
    </>
  );
}

export default ChangePasswordForm;
