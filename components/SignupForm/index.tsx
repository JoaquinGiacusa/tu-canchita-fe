import { useEffect, useState } from "react";

import { Text1 } from "../../ui/Text1"
import { Input } from "../../ui/Input";
import { FormBttn } from "../../ui/FormBttn";

interface inputValues {
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    re_password: string
}

interface errors {
    first_name?: string,
    last_name?: string,
    email?: string,
    password?: string,
    re_password?: string
}

export const validator = (input: inputValues) => {
    let errors: errors = {};
    if (!input.first_name) errors.first_name = 'El nombre es requerido';
    else if (input.first_name.length < 2) errors.first_name = 'El nombre debe contener 2 caracteres minimo';
    else if (input.first_name.length > 23) errors.first_name = 'El nombre debe contener 23 caracteres maximo';
    else if (input.first_name.match(/^[a-zA-Z ,.'-]+$/) === null) errors.first_name = 'El nombre solo puede contener letras';
    if (!input.last_name) errors.last_name = 'El apellido es requerido';
    else if (input.last_name.length < 2) errors.last_name = 'El apellido debe contener 2 caracteres minimo';
    else if (input.last_name.length > 23) errors.last_name = 'El apellido debe contener 23 caracteres maximo';
    else if (input.last_name.match(/^[a-zA-Z ,.'-]+$/) === null) errors.last_name = 'El apellido solo puede contener letras';
    if (!input.password) errors.password = 'La contraseña es requerido';
    else if (input.password.length < 8) errors.password = 'La contraseña debe contener 8 digitos minimo';
    else if (input.password.length > 20) errors.password = 'La contraseña debe contener 20 digitos maximo';
    if (!input.re_password) errors.re_password = 'La contraseña debe ser confirmada';
    else if (input.password !== input.re_password) errors.re_password = 'Las contraseñas no coinciden';
    if (!input.email) errors.email = 'El correo es requerido';

    return errors
}

export const SignupForm = () => {
    const [input, setInput] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        re_password: '',
    })

    const [inputErrors, setInputErrors] = useState({})

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const result = validator(input)
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setInputErrors(result)
    }

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault;
        console.log(inputErrors)
        alert(JSON.stringify(input));
    };

    return(
        <div className="flex flex-col justify-center items-center h-4/5 w-3/5">
            <Text1 children='Registro de Usuario' />
            <form onSubmit={e => submitHandler(e)} className="justify-center w-5/5 h-4/5">
                <Input 
                    type="text"
                    placeHolder="Nombre"
                    name="first_name"
                    changeHandler={changeHandler}
                    errors={inputErrors}
                    min={2}
                    max={23}
                />
                
                <Input 
                    type="text"
                    placeHolder="Apellido"
                    name="last_name"
                    changeHandler={changeHandler}
                    errors={inputErrors}
                    min={2}
                    max={23}
                />


                

                <FormBttn placeholder="Registrar"/>
            </form>
        </div>
)}
