// import styles from "../styles/card.module.css";

interface ICardProps {
  children: React.ReactNode;
  classes: string;
}

const Card = ({ children, classes }: ICardProps) => {
  return <div className={classes}>{children}</div>;
};

export default Card;
