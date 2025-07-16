import React, { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const useFormPopup = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openForm = () => setIsOpen(true);
  const closeForm = () => setIsOpen(false);

  return (
    <FormContext.Provider value={{ isOpen, openForm, closeForm }}>
      {children}
    </FormContext.Provider>
  );
};
