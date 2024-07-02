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


const ContextC = createContext();

export const useContextC = () => {
  return useContext(ContextC);
};

export const ContextAProviderC = ({ children }) => {
  const [dataC, setDataC] = useState('');

  return (
    <ContextC.Provider value={{ dataC, setDataC }}>
      {children}
    </ContextC.Provider>
  );
};


const ContextD = createContext();

export const useContextD = () => {
  return useContext(ContextD);
};

export const ContextAProviderD = ({ children }) => {
  const [dataD, setDataD] = useState('');

  return (
    <ContextD.Provider value={{ dataD, setDataD}}>
      {children}
    </ContextD.Provider>
  );
};


const ContextE = createContext();

export const useContextE = () => {
  return useContext(ContextE);
};

export const ContextAProviderE = ({ children }) => {
  const [dataE, setDataE] = useState('');

  return (
    <ContextE.Provider value={{ dataE, setDataE}}>
      {children}
    </ContextE.Provider>
  );
};