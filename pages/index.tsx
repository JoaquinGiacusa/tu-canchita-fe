import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Text1 } from "../ui/Text1";
import { Text2 } from "../ui/Text2";

const Home: NextPage = () => {
  return <div>
    <Text1>Uñaso</Text1>
    <Text2 text="Hola como andas?"/>
  </div>;
}
export default Home;
