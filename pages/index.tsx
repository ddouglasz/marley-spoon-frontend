import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home: NextPage = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>MS app</title>
        <meta name="description" content="Simple Recipe app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Footer />
    </div>
  );
};

export default Home;
