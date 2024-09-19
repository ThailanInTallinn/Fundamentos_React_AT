import styles from "./card.module.css";

export default function Card(props) {
  return (
    <div className={styles.cardContainer}>
      <img src={props.img} />
      <p>{props.name}</p>
      <p>{props.price}</p>
      <p>
        {props.city}, {props.state}
      </p>
      <p>Nota: {props.score}</p>
    </div>
  );
}
