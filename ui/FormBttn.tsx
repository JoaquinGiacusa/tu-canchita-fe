interface props {
    placeholder: string,
}

export const FormBttn = ({placeholder}: props) => {
    return(
    <input 
        type="submit" 
        placeholder={placeholder} 
        className="bg-[#529DE2] hover:bg-blue-700 text-white w-full py-2 rounded" 
    />
)};
