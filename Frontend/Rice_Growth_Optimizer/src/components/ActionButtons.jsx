import React from 'react';
import { Typography, Paper, Box, Button } from '@mui/material';
import { useOptimizer } from '../context/OptimizerContext';

export default function ActionButtons() {
  const { 
    handleOptimize, 
    handleEnableAutomation, 
    handleReset,
    switchToFlowering,
    generateReport
  } = useOptimizer();
  
  return (
    <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>Actions</Typography>
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <Button 
          variant="contained" 
          color="success" 
          onClick={handleOptimize}
          sx={{ textTransform: 'uppercase' }}
        >
          Optimize
        </Button>
        <Button 
          variant="contained" 
          color="secondary" 
          onClick={handleEnableAutomation}
          sx={{ textTransform: 'uppercase' }}
        >
          Enable Automation
        </Button>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleReset}
          sx={{ textTransform: 'uppercase' }}
        >
          Reset
        </Button>
        {/* <Button 
          variant="contained" 
          color="warning" 
          onClick={switchToFlowering}
          sx={{ textTransform: 'uppercase' }}
        >
          Switch to Flowering
        </Button> */}
        {/* <Button 
          variant="contained" 
          color="info" 
          onClick={generateReport}
          sx={{ textTransform: 'uppercase' }}
        >
          Generate Report
        </Button> */}
      </Box>
    </Paper>
  );
}