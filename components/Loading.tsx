import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <Image src="/loading.gif" alt="Vercel Logo" width={500} height={500} />
    </div>
  );
};

export default Loading;
