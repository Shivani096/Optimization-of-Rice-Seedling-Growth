import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  Tooltip,
  Slider
} from '@mui/material';
import { WaterDrop, Opacity, Shower } from '@mui/icons-material';

const containerOptions = [
  { id: 'sprinkler', label: 'Sprinkler', icon: <Shower fontSize="large" /> },
  { id: 'drip', label: 'Drip', icon: <Opacity fontSize="large" /> }
];

export default function WaterSupplyControl() {
  const [selectedType, setSelectedType] = useState(null);

  // Store separate water levels for each container type
  const [waterLevels, setWaterLevels] = useState({
    sprinkler: 0,
    drip: 0
  });

  const handleLevelChange = (event, newValue) => {
    if (!selectedType) return;
    setWaterLevels(prev => ({
      ...prev,
      [selectedType]: newValue
    }));
  };

  return (
    <Card variant="outlined" sx={{ bgcolor: '#fafafa' }}>
      <CardContent>
        {/* Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <WaterDrop color="primary" sx={{ mr: 1 }} />
          <Typography variant="subtitle1" fontWeight="medium">Water Supply</Typography>
        </Box>

        {/* Container type selector */}
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mb: 3 }}>
          {containerOptions.map((option) => (
            <Tooltip title={option.label} key={option.id}>
              <IconButton
                onClick={() => setSelectedType(option.id)}
                sx={{
                  border: selectedType === option.id ? '2px solid #1976d2' : '2px solid transparent',
                  borderRadius: 2,
                  bgcolor: selectedType === option.id ? '#e3f2fd' : 'transparent',
                  transition: 'all 0.3s',
                }}
              >
                {option.icon}
              </IconButton>
            </Tooltip>
          ))}
        </Box>

        {/* Unified water level slider */}
        {selectedType && (
          <>
            <Typography variant="body2" sx={{ mb: 1 }}>
              {containerOptions.find(c => c.id === selectedType)?.label} Level:{" "}
              <strong>{waterLevels[selectedType]}%</strong>
            </Typography>
            <Slider
              value={waterLevels[selectedType]}
              onChange={handleLevelChange}
              aria-label="Water Level"
              valueLabelDisplay="auto"
              step={5}
              marks
              min={0}
              max={100}
              sx={{ color: '#1976d2' }}
            />
          </>
        )}
      </CardContent>
    </Card>
  );
}
