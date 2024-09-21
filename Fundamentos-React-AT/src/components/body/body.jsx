import styles from "./body.module.css";
import Card from "../card/card";

export default function Body({ localStorageItems }) {
  return (
    <div className={styles.bodyContainer}>
      {localStorageItems.map((item) => {
        return (
          <Card
            key={item.id}
            id={item.id}
            name={item.name}
            city={item.city}
            state={item.state}
            price={item.price}
            description={item.description}
            img={item.photo}
            score={item.score}
          />
        );
      })}
    </div>
  );
}
