import { Link } from "react-router-dom";
import styles from "./card.module.css";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function Card({
  id,
  img,
  name,
  price,
  city,
  state,
  score,
  setHotelsList,
}) {
  return (
    <div className={styles.outerContainer}>
      <Link to={`/details/${id}`} className={styles.linkContainer}>
        <div className={styles.cardContainer}>
          <img
            src={
              img ||
              "https://cdn.pixabay.com/photo/2015/03/17/02/01/cubes-677092_1280.png"
            }
          />
          <p>{name}</p>
          <p>R$ {price}</p>
          <p>
            {city}, {state}
          </p>
          <p>Classificação: {score}</p>
        </div>
      </Link>
      <div className={styles.buttonsContainer}>
        <FaEdit />
        <MdDelete className={styles.delete} onClick={(id) => {}} />
      </div>
    </div>
  );
}
