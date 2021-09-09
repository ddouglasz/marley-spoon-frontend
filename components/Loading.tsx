import Image from "next/image";
import styles from "../styles/loading.module.css";

const Loading = () => {
  return (
    <div data-testid="loading" className={styles.loading}>
      <Image src="/loading.gif" alt="Vercel Logo" width={300} height={250} />
    </div>
  );
};

export default Loading;
