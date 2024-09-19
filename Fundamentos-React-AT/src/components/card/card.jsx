import { Link } from "react-router-dom";
import styles from "./card.module.css";

export default function Card(props) {
  return (
    <Link to={`/details/${props.id}`}>
      <div className={styles.cardContainer}>
        <img src={props.img} />
        <p>{props.name}</p>
        <p>{props.price}</p>
        <p>
          {props.city}, {props.state}
        </p>
        <p>Classificação: {props.score}</p>
      </div>
    </Link>
  );
}
