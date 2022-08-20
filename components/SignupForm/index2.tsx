import * as React from "react";
import { useForm } from "react-hook-form";
import { Input } from "../../ui/Input";

interface IformValues {
    first_name?: string,
    last_name?: string,
    email?: string,
    password?: string,
    re_password?: string
  }

export const SignupForm = () => {
  const { register, handleSubmit, formState: {
    isDirty, errors
  } } = useForm<IformValues>();
  const onSubmit = (data: any) => alert(JSON.stringify(data));
  console.log('errors', errors)
  console.log('isDirty', isDirty)

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
