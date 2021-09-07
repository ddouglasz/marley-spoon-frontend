import Image from "next/image";
import styles from "../styles/error.module.css";

interface IErrorMessage {
  errorMessage: string;
}

const Error = ({ errorMessage }: IErrorMessage) => {
  return <div className={styles.error}>An error occured: <span>{errorMessage}</span></div>;
};

export default Error;
