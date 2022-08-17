import { NextPage } from "next";
import { Signup } from "../../components/signup";

const Home: NextPage = () => {
    return (
    <div className="flex justify-center h-3/5">
        <Signup />
    </div>
)}

export default Home;