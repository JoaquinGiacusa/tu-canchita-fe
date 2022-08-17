import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Text1 } from "../ui/Texts/Text1";

const Home: NextPage = () => {
  return (
    <div>
      <h3 className="text-center text-blue-500">Tu canchita</h3>
      <Text1 text="El Uñazo"/>
    </div>
  );
};

export default Home;
