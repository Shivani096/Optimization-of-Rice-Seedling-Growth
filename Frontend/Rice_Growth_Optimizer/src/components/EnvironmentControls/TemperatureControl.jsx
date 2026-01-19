import React, { useContext, useEffect }  from 'react';
import { Box, Typography, Slider, Card, CardContent } from '@mui/material';
import { Thermostat } from '@mui/icons-material';
import { useOptimizer } from '../../context/OptimizerContext';
import { SensorDataContext } from '../../context/SensorDataContext';

export default function TemperatureControl() {
  const { temperature, setTemperature } = useOptimizer();
  const sensorData = useContext(SensorDataContext);

  useEffect(() => {
    if (sensorData && sensorData.temperature) {
      setTemperature(sensorData.temperature);  // Set from sensor initially
    }
  }, [sensorData, setTemperature]);

  const handleTemperatureChange = (event, newValue) => {
    setTemperature(newValue);
  };

  return (
    <Card variant="outlined" sx={{ bgcolor: '#fafafa' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Thermostat color="error" sx={{ mr: 1 }} />
          <Typography variant="subtitle1" fontWeight="medium">Temperature</Typography>
        </Box>
        <Typography variant="body2" sx={{ mb: 1 }}>Current: {temperature}°C</Typography>
        <Slider
          min={0}
          max={40}
          value={temperature}
          onChange={handleTemperatureChange}
          aria-label="Temperature"
          color="error"
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
          <Typography variant="caption">0°C</Typography>
          <Typography variant="caption">20°C</Typography>
          <Typography variant="caption">40°C</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}