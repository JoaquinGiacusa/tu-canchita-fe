import * as React from "react";
import { useForm } from "react-hook-form";
import { Input } from "../../ui/Input";

export const SignupForm = () => {
  const { register, handleSubmit, formState: {
    isDirty, errors
  } } = useForm({
    defaultValues: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        re_password: '',
    }
  });
  const onSubmit = (data: any) => alert(JSON.stringify(data));
  console.log('errors', errors)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <Input
            type="text"
            name="first_name"
            errors={errors}
            min={3}
            max={23}
            placeHolder="Nombre"
            register={register}
            required={true}
        />
        <Input
            type="text"
            name="last_name"
            errors={errors}
            min={3}
            max={23}
            placeHolder="Apellido"
            register={register}
            required={true}
        />
      <input type="submit" />
    </form>
  );
}
