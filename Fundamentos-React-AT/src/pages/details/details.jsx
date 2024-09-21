import { useEffect, useState } from "react";
import Header from "../../components/header/header";
import styles from "./details.module.css";
import { useParams } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function Details() {
  const [finalObject, setFinalObject] = useState({});
  const parametros = useParams();
  function getItem() {
    const DBItems = localStorage.getItem("@hotels");
    const DBItemsJSON = JSON.parse(DBItems);
    const selectedItem = DBItemsJSON.filter((item) => {
      return item.id == parametros.id;
    });

    const itemsList = selectedItem.pop();

    setFinalObject(itemsList);
  }

  useEffect(() => {
    getItem();
  }, []);

  const starsNumber = Number(finalObject.score);
  const starsList = [];

  function showStars() {
    for (let i = 1; i <= starsNumber; i++) {
      starsList.push(1);
      console.log(finalObject.score);
    }

    return starsList;
  }

  return (
    <div className={styles.detailsContainer}>
      <Header className={styles.headerTwo} />
      <div className={styles.detailsBody}>
        <img src={finalObject.photo} />
        <div className={styles.infoContainer}>
          <div className={styles.priceNameContainer}>
            <h2>{finalObject.name}</h2>
            <p>R$ {finalObject.price}</p>
          </div>
          <p>
            {finalObject.city}, {finalObject.state}
          </p>
          <p className={styles.description}>{finalObject.description}</p>
          <div className={styles.buttonsContainer}>
            <FaEdit />
            <MdDelete className={styles.delete} />
          </div>
        </div>
      </div>
    </div>
  );
}
