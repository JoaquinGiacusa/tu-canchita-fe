import { NextPage } from "next";
import { SignupForm } from "../../components/SignupForm";

const Signup: NextPage = () => {
    return (
    <div className="flex justify-center h-3/5">
        <SignupForm />
    </div>
)}

export default Signup;