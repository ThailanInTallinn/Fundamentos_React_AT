import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { CiLight, CiDark } from "react-icons/ci";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <Link to="/">
        <h1>HotelBooking.</h1>
      </Link>

      <input type="text" placeholder="Busque seu hotel" />

      <span>
        <CiDark />
      </span>
    </header>
  );
}
