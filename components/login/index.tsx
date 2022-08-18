import React from "react";

import { FormBttn } from "../../ui/FormBttn";
import { Input } from "../../ui/Input";
import { Text1 } from "../../ui/Text1";

export const Form = () => {
  return (
    <div className="flex flex-col max-w-md px-4 py-8 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
      <Text1>Ingresar</Text1>

      <div className="p-6 mt-8">
        <form action="#" className="flex flex-col gap-3">
          <Input name="email" type="text" placeHolder="Email"></Input>
          <Input
            name="password"
            type="password"
            placeHolder="Contraseña"
          ></Input>

          <FormBttn placeholder="Crear cuenta"></FormBttn>
        </form>
      </div>
    </div>
  );
};
