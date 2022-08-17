import { Path } from "react-hook-form";

interface IFormValues {
  "First Name": string;
  "Last Name": string;
  Email: string;
  Password: string;
  "Confirm Password": string;
}

type InputProps = {
  label: Path<IFormValues>;
  register: any;
  required: boolean;
  type: string;
  placeHolder: string;
};

export const Input = ({
  label,
  type,
  placeHolder,
  register,
  required,
}: InputProps) => {
  return (
    <input
      type={type}
      className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
      placeholder={placeHolder}
      {...register(label, { required })}
    />
  );
};
