import { Link } from "react-router-dom";
import styles from "./card.module.css";

export default function Card(props) {
  return (
    <Link to={`/details/${props.id}`}>
      <div className={styles.cardContainer}>
        <img
          src={
            props.img ||
            "https://cdn.pixabay.com/photo/2015/03/17/02/01/cubes-677092_1280.png"
          }
        />
        <p>{props.name}</p>
        <p>R$ {props.price}</p>
        <p>
          {props.city}, {props.state}
        </p>
        <p>Classificação: {props.score}</p>
      </div>
    </Link>
  );
}
