// SensorDataContext.js
import React, { createContext, useState } from 'react';
import useSocket from '../hooks/useSocket';

export const SensorDataContext = createContext();

export const SensorDataProvider = ({ children }) => {
  const [data, setSensorData] = useState({});

  useSocket(setSensorData);

  return (
    <SensorDataContext.Provider value={data}>
      {children}
    </SensorDataContext.Provider>
  );
};
