import Link from "next/link";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" passHref>
        <h1>Marley Spoon</h1>
      </Link>
      <h2> Simple and Healthy Recipes</h2>
    </header>
  );
};

export default Header;
