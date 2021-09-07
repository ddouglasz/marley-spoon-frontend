import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span className={styles.footer_text}>Marley Spoon</span>
      <a
        href="https://github.com/ddouglasz/marley-spoon-frontend"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github{" "}
        <span className={styles.logo}>
          <Image
            src="/githublogo.png"
            alt="Vercel Logo"
            width={20}
            height={20}
          />
        </span>
      </a>
    </footer>
  );
};

export default Footer;
