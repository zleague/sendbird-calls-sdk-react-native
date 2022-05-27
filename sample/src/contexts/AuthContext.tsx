import React, { Dispatch, SetStateAction, createContext, useContext, useState } from 'react';

import type { User } from '@sendbird/calls-react-native';

import { noop } from '../../../src/utils';

const AuthContext = createContext<{ currentUser?: User; setCurrentUser: Dispatch<SetStateAction<User | undefined>> }>({
  setCurrentUser: noop,
});

export const useAuthContext = () => useContext(AuthContext);
export const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User>();
  return <AuthContext.Provider value={{ currentUser, setCurrentUser }}>{children}</AuthContext.Provider>;
};