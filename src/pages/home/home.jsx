import ReactModal from "react-modal";
import Body from "../../components/body/body";
import Header from "../../components/header/header";
import Options from "../../components/options/options";
import styles from "./home.module.css";
import { IoMdAdd } from "react-icons/io";
import Modal from "react-modal";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "600px",
    height: "800px",
    color: "black",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "3px solid #00008b",
    borderRadius: "15px",
  },
};

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    city: "",
    state: "",
    price: "",
    description: "",
    photo: "",
    score: "",
  });

  const [hotelsList, setHotelsList] = useState([]);
  const [beingEdited, setBeingEdited] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [themeOption, setThemeOption] = useState(false);

  function setFormInfo(event) {
    switch (event.target.name) {
      case "name":
        setFormData({ ...formData, name: event.target.value });
        break;
      case "city":
        setFormData({ ...formData, city: event.target.value });
        break;
      case "state":
        setFormData({ ...formData, state: event.target.value });
        break;
      case "price":
        setFormData({ ...formData, price: event.target.value });
        break;
      case "description":
        setFormData({ ...formData, description: event.target.value });
        break;
      case "photo":
        setFormData({ ...formData, photo: event.target.value });
        break;
      case "score":
        setFormData({ ...formData, score: event.target.value });
        break;
    }
  }

  function setId() {
    const id = nanoid();
    setFormData({ ...formData, id: id });
  }

  function saveHotels() {
    if (
      formData.name == "" ||
      formData.city == "" ||
      formData.state == "" ||
      formData.price == "" ||
      formData.description == "" ||
      formData.score == ""
    ) {
      alert("Preencha todos os campos.");
    } else if (
      Number(formData.price) < 0 ||
      Number(formData.score) < 1 ||
      Number(formData.score) > 5
    ) {
      alert("Preços devem ser positivos e avaliações devem estar entre 1 e 5");
    } else {
      if (hotelsList.length == 0) {
        const defaultFavorites = JSON.stringify(favorites);
        localStorage.setItem("@FavoriteHotels", defaultFavorites);
      }
      const copy = [...hotelsList];
      copy.push(formData);
      setHotelsList(copy);
      localStorage.setItem("@hotels", JSON.stringify(copy));
      clearUpForm();
    }
  }

  function clearUpForm() {
    setFormData({
      ...formData,

      id: "",
      name: "",
      city: "",
      state: "",
      price: "",
      description: "",
      score: "",
      photo: "",
    });
    setModalIsOpen(false);
  }

  function getLocalStorage() {
    const savedListDB = localStorage.getItem("@hotels");
    if (savedListDB) {
      const savedListDBJSON = JSON.parse(savedListDB);
      setHotelsList(savedListDBJSON);
    }
  }

  function searchItems(word) {
    let searchResult;
    if (word.length > 0) {
      const wordLower = word.toLowerCase();
      searchResult = hotelsList.filter((item) => {
        return item.name.toLowerCase().includes(wordLower);
      });

      setHotelsList(searchResult);
    } else {
      getLocalStorage();
    }
  }

  function deleteItem(itemId) {
    const copy = [...hotelsList];
    const newHotelsList = copy.filter((item) => {
      return item.id != itemId;
    });

    setHotelsList(newHotelsList);
    localStorage.setItem("@hotels", JSON.stringify(newHotelsList));

    const checkFavorites = favorites.filter((item) => {
      return item.id == itemId;
    });

    if (checkFavorites.length > 0) {
      const filteredFavorites = favorites.filter((item) => {
        return item.id != itemId;
      });
      localStorage.setItem(
        "@FavoriteHotels",
        JSON.stringify(filteredFavorites)
      );
      setFavorites(filteredFavorites);
    }
    alert("Hotel excluído com sucesso.");
  }

  function editItem(itemId) {
    setBeingEdited(true);
    const copy = [...hotelsList];
    const newHotelsList = copy.filter((item) => {
      return item.id == itemId;
    });
    const newObjectItem = newHotelsList.pop();
    setFormData({ ...formData, ...newObjectItem });
    setModalIsOpen(true);
  }

  function saveEditedItem() {
    if (
      formData.name == "" ||
      formData.city == "" ||
      formData.state == "" ||
      formData.price == "" ||
      formData.description == "" ||
      formData.score == ""
    ) {
      alert("Preencha todos os campos.");
    } else if (
      Number(formData.price) < 0 ||
      Number(formData.score) < 1 ||
      Number(formData.score) > 5
    ) {
      alert("Preços devem ser positivos e avaliações devem estar entre 1 e 5");
    } else {
      const copy = [...hotelsList];
      const newHotelsList = copy.filter((item) => {
        return item.id != formData.id;
      });
      newHotelsList.push(formData);

      setHotelsList(newHotelsList);
      localStorage.setItem("@hotels", JSON.stringify(hotelsList));
      clearUpForm();
      setBeingEdited(false);
      alert("Hotel editado com sucesso.");
    }
  }

  function setFavorite(itemId) {
    const savedFavoritesDB = localStorage.getItem("@FavoriteHotels");
    if (savedFavoritesDB == null) {
      const pickedHotel = hotelsList.filter((item) => {
        return item.id == itemId;
      });
      const pickedHotelObject = pickedHotel.pop();
      const copy = [...favorites];
      copy.push(pickedHotelObject);
      localStorage.setItem("@FavoriteHotels", JSON.stringify(copy));
      setFavorites(copy);
      alert("Hotel adicionado aos favoritos.");
    } else {
      const pickedHotel = hotelsList.filter((item) => {
        return item.id == itemId;
      });
      const pickedHotelObject = pickedHotel.pop();
      const copy = [...favorites];
      copy.push(pickedHotelObject);
      localStorage.setItem("@FavoriteHotels", JSON.stringify(copy));
      setFavorites(copy);
      alert("Hotel adicionado aos favoritos.");
    }
  }

  function removeFavorite(itemId) {
    const allFavorites = favorites.filter((item) => {
      return item.id != itemId;
    });
    localStorage.setItem("@FavoriteHotels", JSON.stringify(allFavorites));
    setFavorites(allFavorites);
    alert("Hotel removido dos favoritos");
  }

  function setTheme() {
    setThemeOption(!themeOption);
  }

  useEffect(() => {
    getLocalStorage();
  }, []);

  return (
    <div
      className={styles.homeContainer}
      style={{ backgroundColor: themeOption ? "" : "#102a43" }}
    >
      <Header
        searchItems={searchItems}
        setTheme={setTheme}
        themeOption={themeOption}
      />
      <Options
        setShowFavorites={setShowFavorites}
        showFavorites={showFavorites}
        themeOption={themeOption}
      />
      <Body
        hotelsList={hotelsList}
        deleteItem={deleteItem}
        editItem={editItem}
        setFavorite={setFavorite}
        removeFavorite={removeFavorite}
        themeOption={themeOption}
        showFavorites={showFavorites}
        favorites={favorites}
      />
      <span
        onClick={() => {
          setModalIsOpen(!modalIsOpen);
          setId();
        }}
        className={styles.addButton}
      >
        <IoMdAdd />
      </span>
      <Modal
        style={customStyles}
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <div className={styles.modalHeader}>
          <h2>Adicionar um novo hotel</h2>
          <button
            onClick={() => {
              beingEdited == false ? saveHotels() : saveEditedItem();
            }}
          >
            Salvar
          </button>
          <button
            onClick={() => {
              setModalIsOpen(false);
            }}
          >
            X
          </button>
        </div>
        <form
          className={styles.modalForm}
          style={{ backgroundColor: themeOption ? "" : "#102a43" }}
        >
          <label htmlFor="name" style={{ color: themeOption ? "" : "white" }}>
            Nome do hotel
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => {
                setFormInfo(e);
              }}
            />
          </label>
          <label htmlFor="city" style={{ color: themeOption ? "" : "white" }}>
            Cidade
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={(e) => {
                setFormInfo(e);
              }}
            />
          </label>
          <label htmlFor="state" style={{ color: themeOption ? "" : "white" }}>
            Estado
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={(e) => {
                setFormInfo(e);
              }}
            />
          </label>
          <label htmlFor="price" style={{ color: themeOption ? "" : "white" }}>
            Preço da diária
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={(e) => {
                setFormInfo(e);
              }}
            />
          </label>
          <label
            htmlFor="description"
            style={{ color: themeOption ? "" : "white" }}
          >
            Descrição
            <textarea
              name="description"
              value={formData.description}
              onChange={(e) => {
                setFormInfo(e);
              }}
            ></textarea>
          </label>
          <label htmlFor="score" style={{ color: themeOption ? "" : "white" }}>
            Classificação(de 1 a 5)
            <input
              type="text"
              name="score"
              value={formData.score}
              onChange={(e) => {
                setFormInfo(e);
              }}
            />
          </label>
          <label htmlFor="photo" style={{ color: themeOption ? "" : "white" }}>
            Adicione imagens do hotel(URL)
            <input
              type="text"
              name="photo"
              value={formData.photo}
              onChange={(e) => {
                setFormInfo(e);
              }}
            />
          </label>
        </form>
      </Modal>
    </div>
  );
}
