import React from "react";
import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form";
import {Input} from '../../ui/Inputs/input';

interface IFormValues {
    "First Name": string;
    Age: number;
}

export const SignupForm = () => {
    const { register, handleSubmit } = useForm<IFormValues>();
  
    const onSubmit: SubmitHandler<IFormValues> = data => {
      alert(JSON.stringify(data));
    };
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="First Name" register={register} required />
        <input type="submit" />
      </form>
    );
  };