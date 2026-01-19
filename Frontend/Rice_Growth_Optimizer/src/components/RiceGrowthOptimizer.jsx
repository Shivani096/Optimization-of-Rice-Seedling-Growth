import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import SystemStatus from "./SystemStatus";
import ActionButtons from "./ActionButtons";
import EnvironmentControls from "./EnvironmentControls";
import { OptimizerProvider } from "../context/OptimizerContext";
import { SensorDataProvider } from "../context/SensorDataContext";

// Custom theme matching the light blue color scheme
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#4caf50",
    },
    background: {
      default: "#e6f2ff",
    },
  },
});

export default function RiceGrowthOptimizer() {
  return (
    <ThemeProvider theme={theme}>
      <SensorDataProvider>
        <OptimizerProvider>
          <Box
            sx={{ bgcolor: "background.default", minHeight: "100vh", py: 3 }}
          >
            <Container>
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
                sx={{ fontWeight: "bold", color: "text.primary" }}
              >
                Rice Growth Optimizer
              </Typography>

              <SystemStatus />
              <ActionButtons />
              <EnvironmentControls />
            </Container>
          </Box>
        </OptimizerProvider>
      </SensorDataProvider>
    </ThemeProvider>
  );
}
