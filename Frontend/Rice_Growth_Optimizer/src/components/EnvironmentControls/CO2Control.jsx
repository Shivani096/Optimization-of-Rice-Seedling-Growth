import React, { useContext, useEffect } from 'react';
import { Box, Typography, Slider, Card, CardContent } from '@mui/material';
import { Co2 } from '@mui/icons-material';
import { useOptimizer } from '../../context/OptimizerContext';
import { SensorDataContext } from '../../context/SensorDataContext'; // Import sensor context

export default function CO2Control() {
  const { co2Level, setCo2Level } = useOptimizer();
  const sensorData = useContext(SensorDataContext);

  // Set the slider's initial value from sensor data
  useEffect(() => {
    if (sensorData && sensorData.co2_level) {
      setCo2Level(sensorData.co2_level);  // Update optimizer state with real sensor value
    }
  }, [sensorData, setCo2Level]);

  const handleCo2Change = (event, newValue) => {
    setCo2Level(newValue);
  };

  return (
    <Card variant="outlined" sx={{ bgcolor: '#fafafa' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Co2 color="info" sx={{ mr: 1 }} />
          <Typography variant="subtitle1" fontWeight="medium">CO₂ Level</Typography>
        </Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Current: {co2Level} ppm
        </Typography>
        <Slider
          min={200}
          max={1000}
          value={co2Level}
          onChange={handleCo2Change}
          aria-label="CO2 Level"
          color="info"
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
          <Typography variant="caption">200</Typography>
          <Typography variant="caption">600</Typography>
          <Typography variant="caption">1000</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
