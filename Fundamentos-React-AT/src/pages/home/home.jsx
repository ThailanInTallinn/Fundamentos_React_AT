import ReactModal from "react-modal";
import Body from "../../components/body/body";
import Header from "../../components/header/header";
import Options from "../../components/options/options";
import styles from "./home.module.css";
import { IoMdAdd } from "react-icons/io";
import Modal from "react-modal";
import { useState } from "react";

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
    name: "",
    city: "",
    state: "",
    price: "",
    description: "",
    photo: "",
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
    }
  }

  function saveHotels() {
    console.log(formData);
    setFormData({
      name: "",
      city: "",
      state: "",
      price: "",
      description: "",
      photo: "",
    });
    console.log(hotelsList);
  }

  return (
    <div className={styles.homeContainer}>
      <Header />
      <Options />
      <Body />
      <span
        onClick={() => {
          setModalIsOpen(!modalIsOpen);
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
              onChange={(e) => {
                setFormInfo(e);
              }}
            />
          </label>
          <label htmlFor="description">
            Descrição
            <textarea
              name="description"
              onChange={(e) => {
                setFormInfo(e);
              }}
            ></textarea>
          </label>
          <label htmlFor="photo">
            Adicione imagens do hotel(URL)
            <input
              type="text"
              name="photo"
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
