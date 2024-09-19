import Header from "../../components/header/header";
import Options from "../../components/options/options";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Header />
      <Options />
    </div>
  );
}
