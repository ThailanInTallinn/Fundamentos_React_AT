import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { CiLight, CiDark } from "react-icons/ci";

export default function Header({ searchItems, setTheme, themeOption }) {
  return (
    <header className={styles.headerContainer}>
      <Link to="/">
        <h1>HotelBooking.</h1>
      </Link>
      <div className={styles.optionsContainer}>
        <input
          type="text"
          placeholder="Busque seu hotel"
          onChange={(e) => {
            searchItems(e.target.value);
          }}
        />

        <span>
          <CiDark
            onClick={() => {
              setTheme();
            }}
          />
        </span>
      </div>
    </header>
  );
}
