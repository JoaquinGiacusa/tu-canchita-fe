interface props {
    text: string,
}

export const Text2 = ({text}: props) => {
    return(
    <h3 className="font-semibold text-xl text-[#3D5278]">
        {text}
    </h3>
)};
