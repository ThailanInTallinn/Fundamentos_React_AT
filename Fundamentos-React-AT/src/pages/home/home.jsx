import Body from "../../components/body/body";
import Header from "../../components/header/header";
import Options from "../../components/options/options";
import styles from "./home.module.css";
import { IoMdAdd } from "react-icons/io";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Header />
      <Options />
      <Body />
      <span className={styles.addButton}>
        <IoMdAdd />
      </span>
    </div>
  );
}
