import Header from "../../components/header/header";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Header />
    </div>
  );
}
