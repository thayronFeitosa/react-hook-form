import React, { createContext, useState, useContext } from 'react';

 type Iprops = {
  statusModalOk: boolean
  setStatusModalOk(status: boolean): void;

}

export const ModalStatusOk = createContext<Iprops>({} as Iprops);

export const ModalStatusOkProvider: React.FC = ({ children }) => {
  const [statusModalOk, setStatusModalOk] = useState<boolean>(false);
  return (
    <ModalStatusOk.Provider value={{
      statusModalOk,
      setStatusModalOk,
    }}
    >
      {children}
    </ModalStatusOk.Provider>
  );
};

export const useModalStatusOk = () => {
  const contex = useContext(ModalStatusOk);
  const {
    statusModalOk,
    setStatusModalOk,
  } = contex;

  return {
    statusModalOk,
    setStatusModalOk,
  };
};
