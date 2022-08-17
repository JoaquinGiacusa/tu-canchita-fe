import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "../../ui/input";

// function Input({ label, register, required }: any) {
//   return (
//     <>
//       <label>{label}</label>
//       <input className="border-4 border-gray-800" {...register("firstName")} />
//     </>
//   );
// }

export const Form = () => {
  const { register, handleSubmit } = useForm();

  return (
    <div className="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
      <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
        Crea tu cuenta
      </div>
      <span className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
        Ya tienes una cuenta?
        <a
          href="#"
          target="_blank"
          className="text-sm text-blue-500 underline hover:text-blue-700"
        >
          Sign in
        </a>
      </span>
      <div className="p-6 mt-8">
        <form action="#">
          <div className="flex flex-col mb-2">
            <div className="relative ">
              <Input
                label="NOMBRE LABEL"
                type="text"
                placeHolder="Nombre asdas"
                register={register}
                required
              ></Input>
              <Input
                label="NOMBRE LABEL"
                type="password"
                placeHolder="Nombre asdas"
                register={register}
                required
              ></Input>
              <Input
                label="NOMBRE LABEL"
                type="text"
                placeHolder="Nombre asdas"
                register={register}
                required
              ></Input>
            </div>
          </div>
          <div className="flex gap-4 mb-2">
            <div className="relative ">
              <input
                type="text"
                id="create-account-first-name"
                className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                name="First name"
                placeholder="First name"
              />
            </div>
            <div className="relative ">
              <input
                type="text"
                id="create-account-last-name"
                className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                name="Last name"
                placeholder="Last name"
              />
            </div>
          </div>
          <div className="flex flex-col mb-2">
            <div className="relative ">
              <input
                type="text"
                id="create-account-email"
                className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="flex w-full my-4">
            <button
              type="submit"
              className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
