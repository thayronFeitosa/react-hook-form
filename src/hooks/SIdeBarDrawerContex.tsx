/* eslint-disable react/react-in-jsx-scope */
import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';
import {
  createContext, ReactNode, useContext, useEffect,
} from 'react';

interface SideBarDrawerProviderProps {
  children: ReactNode;
}

type SideBarDrawerContexData = UseDisclosureReturn;

const SideBarDrawerContex = createContext({} as SideBarDrawerContexData);

export function SideBarDrawerProvider({ children }:SideBarDrawerProviderProps): JSX.Element {
  const disclosure = useDisclosure();

  return (
    <SideBarDrawerContex.Provider value={disclosure}>
      {children}
    </SideBarDrawerContex.Provider>
  );
}

export const useSideBarDrawer = () => useContext(SideBarDrawerContex);
