import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/layout.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface IChildren {
    children: React.ReactNode
}

const Layout = ({ children }: IChildren) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>MS app</title>
        <meta name="description" content="Simple Recipe app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
