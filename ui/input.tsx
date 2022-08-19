type Input = {
  type: string;
  placeHolder: string;
  register: any;
  required: boolean;
};

export const Input = ({ type, placeHolder, register, required }: Input) => {
  return (
    <input
      type={type}
      className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
      placeholder={placeHolder}
      {...register(type, { required })}
    />
  );
};
