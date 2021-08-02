import React from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';
import { ModalStatusOkProvider } from './statusModal';
import { SideBarDrawerProvider } from './SIdeBarDrawerContex';

const AppProvider: React.FC = ({ children }) => (
  (
    <>
      <AuthProvider>
        <SideBarDrawerProvider>
          <ToastProvider>
            <ModalStatusOkProvider>{children}</ModalStatusOkProvider>
          </ToastProvider>
        </SideBarDrawerProvider>
      </AuthProvider>
      {/* <ArManagerProvider /> */}

    </>

  )
);

export default AppProvider;
