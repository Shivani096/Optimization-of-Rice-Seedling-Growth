import React, { useContext, useEffect } from 'react';
import { Box, Typography, Slider, Card, CardContent } from '@mui/material';
import { Grass } from '@mui/icons-material';
import { useOptimizer } from '../../context/OptimizerContext';
import { SensorDataContext } from '../../context/SensorDataContext';

export default function SoilMoistureControl() {
  const { soilMoisture, setSoilMoisture } = useOptimizer();
  const sensorData = useContext(SensorDataContext);

  useEffect(() => {
    if (sensorData && sensorData.soil_moisture) {
      setSoilMoisture(sensorData.soil_moisture);  // Set from sensor initially
    }
  }, [sensorData, setSoilMoisture]);

  const handleMoistureChange = (event, newValue) => {
    setSoilMoisture(newValue);
  };

  return (
    <Card variant="outlined" sx={{ bgcolor: '#fafafa' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Grass color="success" sx={{ mr: 1 }} />
          <Typography variant="subtitle1" fontWeight="medium">Soil Moisture</Typography>
        </Box>
        <Typography variant="body2" sx={{ mb: 1 }}>Current: {soilMoisture}%</Typography>
        <Slider
          min={0}
          max={100}
          value={soilMoisture}
          onChange={handleMoistureChange}
          aria-label="Soil Moisture"
          color="success"
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
          <Typography variant="caption">Dry</Typography>
          <Typography variant="caption">Moist</Typography>
          <Typography variant="caption">Wet</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}