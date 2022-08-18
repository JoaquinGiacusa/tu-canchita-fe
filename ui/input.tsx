import { Path } from "react-hook-form";

type InputProps = {
  type: string;
  name: string;
  changeHandler: any;
  placeHolder: string;
  errors: any;
};

export const Input = ({
  type,
  placeHolder,
  name,
  changeHandler,
  errors
}: InputProps) => {
  return (
    <div className="w-24 h-4">
        <input
          type={type}
          name={name}
          className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          placeholder={placeHolder}
          onChange={changeHandler}
        />
        {errors[name]? <p>{errors[name]}</p>: null}
    </div>
 
  );
};
