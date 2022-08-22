import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Text1 } from "../ui/Text1";
import { FormBttn } from "../ui/FormBttn";
import { SignupForm } from "../components/signup";
import { SigninForm } from "../components/signin";

const Home: NextPage = () => {
  return (
    <div>
      <SignupForm></SignupForm>
    </div>
  );
};

export default Home;
