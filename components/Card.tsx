
interface ICardProps {
  children: React.ReactNode;
  classes: string;
}

const Card = ({ children, classes }: ICardProps) => {
  return <div data-testid="card" className={classes}>{children}</div>;
};

export default Card;
