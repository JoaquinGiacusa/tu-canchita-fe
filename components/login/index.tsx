import React from "react";
import { useForm } from "react-hook-form";
import { FormBttn } from "../../ui/FormBttn";
import { Input } from "../../ui/input";
import { Text1 } from "../../ui/Text1";

export const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="flex flex-col max-w-md px-4 py-8 mx-auto text-center bg-white rounded-lg shadow justify-self-center dark:bg-gray-800 ">
      <Text1>Ingresar</Text1>

      <div className="p-6">
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="email"
            placeHolder="Email"
            register={register}
            required={true}
          ></Input>
          <Input
            type="password"
            placeHolder="Contraseña"
            register={register}
            required={true}
          ></Input>

          <FormBttn placeholder="Ingresar"></FormBttn>
        </form>
      </div>
    </div>
  );
};
