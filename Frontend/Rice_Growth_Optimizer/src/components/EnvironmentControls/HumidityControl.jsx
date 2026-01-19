import React, { useContext, useEffect } from 'react';
import { Box, Typography, Slider, Card, CardContent } from '@mui/material';
import { Opacity } from '@mui/icons-material';
import { useOptimizer } from '../../context/OptimizerContext';
import { SensorDataContext } from '../../context/SensorDataContext';

export default function HumidityControl() {
  const { humidity, setHumidity } = useOptimizer();
  const sensorData = useContext(SensorDataContext);

  useEffect(() => {
    if (sensorData && sensorData.humidity) {
      setHumidity(sensorData.humidity);  // Set from sensor initially
    }
  }, [sensorData, setHumidity]);

  const handleHumidityChange = (event, newValue) => {
    setHumidity(newValue);
  };

  return (
    <Card variant="outlined" sx={{ bgcolor: '#fafafa' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Opacity color="primary" sx={{ mr: 1 }} />
          <Typography variant="subtitle1" fontWeight="medium">Humidity</Typography>
        </Box>
        <Typography variant="body2" sx={{ mb: 1 }}>Current: {humidity}%</Typography>
        <Slider
          min={0}
          max={100}
          value={humidity}
          onChange={handleHumidityChange}
          aria-label="Humidity"
          color="primary"
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
          <Typography variant="caption">0%</Typography>
          <Typography variant="caption">50%</Typography>
          <Typography variant="caption">100%</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}