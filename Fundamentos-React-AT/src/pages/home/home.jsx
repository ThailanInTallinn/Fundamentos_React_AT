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

  function setFormInfo(event) {
    switch (event.target.name) {
      case "name":
        setFormData({ name: event.target.value });
        break;
      case "city":
        setFormData({ city: event.target.value });
        break;
      case "state":
        setFormData({ state: event.target.value });
        break;
      case "price":
        setFormData({ price: event.target.value });
        break;
      case "description":
        setFormData({ description: event.target.value });
        break;
      case "photo":
        setFormData({ photo: event.target.value });
    }
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
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <div className={styles.modalHeader}>
          <h2>Adicionar um novo hotel</h2>
          <button>Salvar</button>
          <button
            onClick={() => {
              setModalIsOpen(false);
            }}
          >
            X
          </button>
        </div>
        <form className={styles.modalForm}>
          <label for="name">
            Nome do hotel
            <input
              type="text"
              name="name"
              onChange={(e) => {
                setFormInfo(e);
              }}
            />
          </label>
          <label for="city">
            Cidade
            <input type="text" name="city" onChange={(e) => {}} />
          </label>
          <label for="state">
            Estado
            <input type="text" name="state" />
          </label>
          <label for="price">
            Preço da diária
            <input type="text" name="price" />
          </label>
          <label for="description">
            Descrição
            <textarea name="description"></textarea>
          </label>
          <label for="photo">
            Adicione imagens do hotel(URL)
            <input type="text" />
          </label>
        </form>
      </Modal>
    </div>
  );
}
