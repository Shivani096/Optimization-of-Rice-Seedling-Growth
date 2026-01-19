import React, { createContext, useState, useContext } from 'react';

const OptimizerContext = createContext();

export const useOptimizer = () => useContext(OptimizerContext);

export const OptimizerProvider = ({ children }) => {
  const [temperature, setTemperature] = useState(26);
  const [humidity, setHumidity] = useState(45);
  const [co2Level, setCo2Level] = useState(420);
  const [lightIntensity, setLightIntensity] = useState(65);
  const [soilMoisture, setSoilMoisture] = useState(75);
  const [mode, setMode] = useState("manual");
  const [systemStatus, setSystemStatus] = useState("optimizing");
  const [growthStage, setGrowthStage] = useState("vegetative");
  const [healthStatus, setHealthStatus] = useState("excellent");

  const handleOptimize = () => {
    setSystemStatus("optimizing");
  };
  
  const handleEnableAutomation = () => {
    setMode("automated");
  };
  
  const handleReset = () => {
    setTemperature(26);
    setHumidity(45);
    setCo2Level(420);
    setLightIntensity(65);
    setSoilMoisture(75);
    setMode("manual");
  };
  
  const switchToFlowering = () => {
    setGrowthStage("flowering");
  };
  
  const generateReport = () => {
    alert("Generating growth report...");
  };

  return (
    <OptimizerContext.Provider value={{
      temperature, setTemperature,
      humidity, setHumidity,
      co2Level, setCo2Level,
      lightIntensity, setLightIntensity,
      soilMoisture, setSoilMoisture,
      mode, systemStatus, growthStage, healthStatus,
      handleOptimize, handleEnableAutomation, handleReset,
      switchToFlowering, generateReport
    }}>
      {children}
    </OptimizerContext.Provider>
  );
};