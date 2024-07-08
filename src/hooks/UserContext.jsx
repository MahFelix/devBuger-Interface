import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({}); // Correção aqui

  const putUserData = (userInfo) => {
    setUserData(userInfo);
  };

  return (
    <UserContext.Provider value={{ userData, putUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired, // Adicionado .isRequired para indicar que é obrigatório
};












