import styles from "./body.module.css";
import Card from "../card/card";

export default function Body() {
  const hotelList = [];

  function multiHotel() {
    for (let i = 0; i < 10; i++) {
      hotelList.push(
        <Card
          img="https://mocks.elevenplusexams.co.uk/assets/uncompiled/online_mocks1.jpg?t=3654667474"
          name="Hotel"
          price="300"
          city="Rio de Janeiro"
          state="RJ"
          score="5"
        />
      );
    }

    return hotelList;
  }
  return <div className={styles.bodyContainer}>{multiHotel()};</div>;
}
