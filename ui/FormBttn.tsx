interface props {
  placeholder: string;
}

export const FormBttn = ({ placeholder }: props) => {
  return (
    <input
      type="submit"
      value={placeholder}
      className="bg-[#529DE2] hover:bg-blue-700  w-full py-2 rounded  px-4  focus:bg-blue-700 focus:ring-offset-blue-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
    />
  );
};
