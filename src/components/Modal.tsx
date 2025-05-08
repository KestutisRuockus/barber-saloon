import Appointment from "./Appointment";
import ModalContext from "../context/ModalContext";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";

const Modal = () => {
  const modalContext = useContext(ModalContext);

  if (!modalContext) {
    throw new Error("ModalContext must be used within a ModalContextProvider");
  }
  const { isModalVisible, setIsModalVisible } = modalContext;

  return (
    <div
      className={`absolute left-0 right-0 top-20 mx-auto bg-dark-bg z-30 w-11/12 md:w-4/5 lg:w-3/5 ${
        isModalVisible ? "block" : "hidden"
      }`}
    >
      <FontAwesomeIcon
        onClick={() => setIsModalVisible(false)}
        className="absolute top-4 right-4 text-4xl text-white overflow-hidden rounded-full cursor-pointer hover:text-hover-bg hover:opacity-30 transition-all duration-300 z-30"
        icon={faRectangleXmark}
      />
      <Appointment />
    </div>
  );
};

export default Modal;
