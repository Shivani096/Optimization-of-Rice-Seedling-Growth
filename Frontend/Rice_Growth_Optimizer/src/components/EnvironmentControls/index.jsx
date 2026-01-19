import React from 'react';
import { Typography, Paper, Grid } from '@mui/material';
import TemperatureControl from './TemperatureControl';
import HumidityControl from './HumidityControl';
import CO2Control from './CO2Control';
import LightControl from './LightControl';
import SoilMoistureControl from './SoilMoistureControl';
import WaterSupplyControl from './WaterSupplyControl';

export default function EnvironmentControls() {
  return (
    <Paper elevation={2} sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>Environment Controls</Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4} lg={2.4}>
          <TemperatureControl />
        </Grid>
        
        <Grid item xs={12} sm={6} md={4} lg={2.4}>
          <HumidityControl />
        </Grid>
        
        <Grid item xs={12} sm={6} md={4} lg={2.4}>
          <CO2Control />
        </Grid>
        
        <Grid item xs={12} sm={6} md={4} lg={2.4}>
          <LightControl />
        </Grid>
        
        <Grid item xs={12} sm={6} md={4} lg={2.4}>
          <SoilMoistureControl />
        </Grid>
        
        <Grid item xs={12} sm={6} md={4} lg={2.4}>
          <WaterSupplyControl />
        </Grid>
      </Grid>
    </Paper>
  );
}