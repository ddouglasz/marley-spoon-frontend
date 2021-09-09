import Image from "next/image";
import Link from "next/link";
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="/" passHref><span className={styles.footer_text}>Marley Spoon</span></Link>
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
