import { Text1 } from "../../ui/Text1"
import { Input } from "../../ui/input"
import { FormBttn } from "../../ui/FormBttn";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormValues {
  "First Name": string;
  Age: number;
}

export const Signup = () => {
    const { register, handleSubmit } = useForm<IFormValues>();

    const onSubmit: SubmitHandler<IFormValues> = data => {
        alert(JSON.stringify(data));
      };

    return(
    <div className="flex flex-col justify-center items-center h-4/5 w-3/5">
        <Text1 children='Registro de Usuario' />
        <form onSubmit={handleSubmit(onSubmit)} className="justify-center">
            <Input 
                label="First Name"
                type="text"
                placeHolder="Nombre"
                register={register}
                required
            />

            <Input 
                label="Last Name"
                type="text"
                placeHolder="Apellido"
                register={register}
                required
            />

            <Input 
                label="Email"
                type="email"
                placeHolder="Email"
                register={register}
                required
            />

            <Input 
                label="Password"
                type="password"
                placeHolder="Contraseña"
                register={register}
                required
            />

            <Input  
                label="Confirm Password"
                type="password"
                placeHolder="Confirmar Contraseña"
                register={register}
                required
            />

            <FormBttn placeholder="Registrar"/>
        </form>
    </div>
)}
