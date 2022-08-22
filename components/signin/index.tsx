import { log } from "console";
import React from "react";
import { useForm } from "react-hook-form";
import { AlertForm } from "../../ui/alert-form";
import { FormBttn } from "../../ui/FormBttn";
import { Input } from "../../ui/input";
import { Text1 } from "../../ui/Text1";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IFormInputs {
  email: string;
  password: string;
}

const validationSchema = yup.object().shape({
  email: yup.string().required("El campo email es requerido."),
  password: yup
    .string()
    .required("La contraseña es requerida.")
    .min(6, "La contraseña dene tener al menos 6 caracteres."),
});

export const SigninForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data: IFormInputs) => console.log(data);

  console.log("xd", errors);

  return (
    <div className="flex flex-col max-w-md px-4 py-8 mx-auto mt-12 text-center bg-white rounded-lg shadow justify-self-center dark:bg-gray-800 ">
      <Text1>Ingresar</Text1>

      <div className="p-6">
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="email"
            type="email"
            placeHolder="Email"
            register={register}
          ></Input>
          {errors?.email && <AlertForm>{errors?.email?.message}</AlertForm>}
          <Input
            name="password"
            type="password"
            placeHolder="Contraseña"
            register={register}
          ></Input>
          {errors?.password && (
            <AlertForm>{errors?.password?.message}</AlertForm>
          )}
          <FormBttn placeholder="Ingresar"></FormBttn>
        </form>
      </div>
    </div>
  );
};
