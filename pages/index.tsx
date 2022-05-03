import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="text-center text-2xl content-center grid h-screen">
      <h1 className="text-5xl font-bold bg-clip-text bg-black">LULO</h1>
      <div className="mt-4 text-2xl">Funding order book. </div>
    </div>
  );
};

export default Home;
