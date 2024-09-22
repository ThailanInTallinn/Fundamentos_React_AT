import { Link } from "react-router-dom";
import styles from "./card.module.css";
import { FaEdit } from "react-icons/fa";
import { MdDelete, MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useState } from "react";

export default function Card({
  id,
  img,
  name,
  price,
  city,
  state,
  score,
  deleteItem,
  editItem,
  setFavorite,
  removeFavorite,
  themeOption,
}) {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div className={styles.outerContainer}>
      <Link to={`/details/${id}`} className={styles.linkContainer}>
        <div
          className={styles.cardContainer}
          style={{ backgroundColor: themeOption ? "" : "navy" }}
        >
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
        <FaEdit
          onClick={() => {
            editItem(id);
          }}
        />
        <MdDelete
          className={styles.delete}
          onClick={() => {
            deleteItem(id);
          }}
        />
        {isFavorite ? (
          <MdFavorite
            onClick={() => {
              removeFavorite(id);
              setIsFavorite(false);
            }}
          />
        ) : (
          <MdFavoriteBorder
            onClick={() => {
              setFavorite(id);
              setIsFavorite(true);
            }}
          />
        )}
      </div>
    </div>
  );
}
