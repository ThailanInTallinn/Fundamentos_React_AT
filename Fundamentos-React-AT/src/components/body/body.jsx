import styles from "./body.module.css";
import Card from "../card/card";

export default function Body(props) {
  return (
    <div className={styles.bodyContainer}>
      {props.hotelsList.map((item) => {
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
            deleteItem={props.deleteItem}
            editItem={props.editItem}
            setFavorite={props.setFavorite}
            removeFavorite={props.removeFavorite}
          />
        );
      })}
    </div>
  );
}
