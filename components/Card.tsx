import styles from "../styles/Card.module.css";

interface ICardProps {
  children: React.ReactNode;
}

const Card = ({ children }: ICardProps) => {
  return <div className={styles.card}>{children}</div>;
};

export default Card;
