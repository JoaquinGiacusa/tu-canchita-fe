interface Text1 {
    text: string
}

export const Text1 = ({text}: Text1) => (
    <h1 className="font-sans text-lg font-bold leading-6">
        {text}
    </h1>
)