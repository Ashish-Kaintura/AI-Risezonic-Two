// src/context/FormModalContext.js
import React, { createContext, useContext, useState } from "react";

const FormModalContext = createContext();

export const FormModalProvider = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <FormModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </FormModalContext.Provider>
  );
};

export const useFormModal = () => useContext(FormModalContext);
