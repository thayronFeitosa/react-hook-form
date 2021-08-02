import React, {
  createContext, useCallback, useContext, useState,
} from 'react';
import Cookies from 'universal-cookie';
import api from '../utils/services/api';

interface AuthState {
  acess: string;
  user: object;
  refresh?: string;
}

interface SignInCredentials {
  userName: string;
  password: string;
}

interface AuthContextData {
  user: object;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const acess = localStorage.getItem('@controllertokenacessauth');
    const user = localStorage.getItem('@controller:user');

    if (acess && user) {
      return { acess, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });
  const cookies = new Cookies();

  const signIn = useCallback(async ({ userName, password }: SignInCredentials) => {
    const response = await api.post('/api/authenticate/login', {
      userName,
      password,
    });

    const { acess, user } = response?.data.success;
    const { namePermission } = user[0]?.permission_user;
    console.log(namePermission);

    localStorage.setItem('@controllertokenacessauth', acess);
    localStorage.setItem('@controller:user', JSON.stringify(user));
    localStorage.setItem('@keyItemName', (namePermission) || '');
    setData({ acess, user });
  }, []); // eslint-disable-line

  const signOut = useCallback(() => {
    localStorage.removeItem('@controllertokenacessauth');
    localStorage.removeItem('@controller:user');
    localStorage.removeItem('@keyItemName');
    cookies.remove('refresh', { path: '/' });
    setData({} as AuthState);
  }, []); // eslint-disable-line

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const headersToken = () => {  // eslint-disable-line
  const cookies = new Cookies();

  const AuthStr = `Bearer ${localStorage.getItem('@controllertokenacessauth')}`;
  const User = `${localStorage.getItem('@controller:user')}`;
  const Permission = `${localStorage.getItem('@keyItemName')}`;
  const RefreshToken = `Bearer ${cookies.get('refresh')}`;

  return {
    headers: {
      Authorization: AuthStr,
      datauser: User,
      permission: Permission,
      refreshToken: RefreshToken,
    },
  };
};

const removeToken = () => {  // eslint-disable-line
  localStorage.removeItem('@controllertokenacessauth');
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export {
  AuthProvider,
  useAuth,
  headersToken,
  removeToken,
};
