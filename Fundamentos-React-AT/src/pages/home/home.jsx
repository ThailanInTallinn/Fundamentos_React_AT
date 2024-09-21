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
    const newHotelsList = hotelsList.filter((item) => {
      return item.id != itemId;
    });

    setHotelsList(newHotelsList);
  }

  useEffect(() => {
    getLocalStorage();
  }, []);

  return (
    <div className={styles.homeContainer}>
      <Header searchItems={searchItems} />
      <Options />
      <Body localStorageItems={hotelsList} setHotelsList={setHotelsList} />
      <span
        onClick={() => {
          setModalIsOpen(!modalIsOpen);
          setId();
          console.log(hotelsList);
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
              saveHotels();
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
        <form className={styles.modalForm}>
          <label htmlFor="name">
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
          <label htmlFor="city">
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
          <label htmlFor="state">
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
          <label htmlFor="price">
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
          <label htmlFor="description">
            Descrição
            <textarea
              name="description"
              value={formData.description}
              onChange={(e) => {
                setFormInfo(e);
              }}
            ></textarea>
          </label>
          <label htmlFor="score">
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
          <label htmlFor="photo">
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
