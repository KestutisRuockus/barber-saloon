import { ReactNode, useState } from "react";
import ModalContext from "./ModalContext";

type ModalContextProviderProps = {
  children: ReactNode;
};

const ModalContextProvider = ({ children }: ModalContextProviderProps) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  return (
    <ModalContext.Provider value={{ isModalVisible, setIsModalVisible }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
