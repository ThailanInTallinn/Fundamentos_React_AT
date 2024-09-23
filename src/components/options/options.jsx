import styles from "./options.module.css";

export default function Options({
  setShowFavorites,
  showFavorites,
  themeOption,
}) {
  return (
    <div className={styles.optionsContainer}>
      <div className={styles.favoritesContainer}>
        <h2 style={{ color: themeOption ? "" : "white" }}>Hotéis favoritos</h2>
        <button
          onClick={() => {
            setShowFavorites(!showFavorites);
          }}
        >
          {showFavorites ? "Mostrar todos" : "Mostrar favoritos"}
        </button>
      </div>
    </div>
  );
}
