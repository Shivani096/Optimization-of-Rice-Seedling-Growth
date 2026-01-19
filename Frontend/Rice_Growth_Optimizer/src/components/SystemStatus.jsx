import React from 'react';
import { Typography, Paper, Grid, Divider } from '@mui/material';
import { useOptimizer } from '../context/OptimizerContext';

export default function SystemStatus() {
  const { mode, systemStatus, growthStage, healthStatus } = useOptimizer();
  
  return (
    <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>System Status</Typography>
      <Divider sx={{ mb: 2 }} />
      
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Typography variant="body2" color="text.secondary">Mode</Typography>
          <Typography variant="body1" fontWeight="medium">{mode === "manual" ? "Manual" : "Automated"}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="body2" color="text.secondary">System Status</Typography>
          <Typography variant="body1" fontWeight="medium">{systemStatus}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="body2" color="text.secondary">Growth Stage</Typography>
          <Typography variant="body1" fontWeight="medium">{growthStage}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="body2" color="text.secondary">Health Status</Typography>
          <Typography variant="body1" fontWeight="medium">{healthStatus}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}