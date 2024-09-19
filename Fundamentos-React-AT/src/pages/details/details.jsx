import Header from "../../components/header/header";
import styles from "./details.module.css";
import { useParams } from "react-router-dom";

export default function Details() {
  const parametros = useParams();

  return (
    <div className={styles.detailsContainer}>
      <Header />
      {console.log(parametros)}
    </div>
  );
}
