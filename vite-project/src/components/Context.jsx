import React, { createContext, useContext, useState } from 'react';

const ContextA = createContext();

export const useContextA = () => {
  return useContext(ContextA);
};

export const ContextAProviderA = ({ children }) => {
  const [dataA, setDataA] = useState('');

  return (
    <ContextA.Provider value={{ dataA, setDataA }}>
      {children}
    </ContextA.Provider>
  );
};

const ContextB = createContext();

export const useContextB = () => {
  return useContext(ContextB);
};

export const ContextBProviderB = ({ children }) => {
  const [dataB, setDataB] = useState('0');

  return (
    <ContextB.Provider value={{ dataB, setDataB }}>
      {children}
    </ContextB.Provider>
  );
};