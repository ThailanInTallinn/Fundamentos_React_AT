import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { CiLight, CiDark } from "react-icons/ci";
import { useState } from "react";

export default function Header({ searchItems, setTheme, themeOption }) {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <header className={styles.headerContainer}>
      <Link to="/">
        <h1>HotelBooking.</h1>
      </Link>
      <span
        className={styles.menuToggle}
        style={{ color: themeOption ? "white" : "" }}
        onClick={() => {
          setMenuToggle(!menuToggle);
        }}
      >
        =
      </span>
      <div
        className={styles.optionsContainer}
        style={{ display: menuToggle ? "flex" : "" }}
      >
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
