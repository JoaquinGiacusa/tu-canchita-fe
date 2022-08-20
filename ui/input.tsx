import { Path, UseFormRegister, FieldErrorsImpl } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message'

interface IformValues {
  first_name?: string,
  last_name?: string,
  email?: string,
  password?: string,
  re_password?: string
}

type InputProps = {
  type: string;
  name: Path<IformValues>;
  placeHolder: string;
  errors: any;
  min: number;
  max: number;
  register: UseFormRegister<IformValues>;
  required: boolean;
};

export const Input = ({
  type,
  placeHolder,
  name,
  required,
  register,
  errors,
  min,
  max,
}: InputProps) => {
  console.log('errors2', errors)
  return (
    <div className="w-24 h-24">
      <input
        type={type}
        id={name}
        className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        placeholder={placeHolder}
        {...register(name, {
            required: required,
            maxLength: {
                value: max,
                message: 'errors maxLength'
            },
            minLength: {
                value: min,
                message: 'errors minLength'
            },
            pattern: {
                value: /^[a-zA-Z ,.'-]+$/,
                message: 'error pattern'
            },
            validate: {
              email: (value: any) => (type === 'email' && value.match(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i) === null) || 'errors email'
            }
        })}
         
      />
      <ErrorMessage errors={errors} name={name} render={({message}) =><p>{message}</p>} />
      {errors? <p>{`${errors.message}`}</p>: null}
    </div>
 
  );
};
