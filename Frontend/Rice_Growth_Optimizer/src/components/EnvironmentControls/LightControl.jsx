import React, { useContext, useEffect } from 'react';
import { Box, Typography, Slider, Card, CardContent } from '@mui/material';
import { WbSunny } from '@mui/icons-material';
import { useOptimizer } from '../../context/OptimizerContext';
import { SensorDataContext } from '../../context/SensorDataContext';

export default function LightControl() {
  const { lightIntensity, setLightIntensity } = useOptimizer();
  const sensorData = useContext(SensorDataContext);

  useEffect(() => {
    if (sensorData && sensorData.light_intensity) {
      setLightIntensity(sensorData.light_intensity);  // Set from sensor initially
    }
  }, [sensorData, setLightIntensity]);

  const handleLightChange = (event, newValue) => {
    setLightIntensity(newValue);
  };

  return (
    <Card variant="outlined" sx={{ bgcolor: '#fafafa' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <WbSunny sx={{ color: '#ff9800', mr: 1 }} />
          <Typography variant="subtitle1" fontWeight="medium">Light Intensity</Typography>
        </Box>
        <Typography variant="body2" sx={{ mb: 1 }}>Current: {lightIntensity}%</Typography>
        <Slider
          min={0}
          max={100}
          value={lightIntensity}
          onChange={handleLightChange}
          aria-label="Light Intensity"
          sx={{ color: '#ff9800' }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
          <Typography variant="caption">Low</Typography>
          <Typography variant="caption">Medium</Typography>
          <Typography variant="caption">High</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}