import numpy as np
import pandas as pd

days = np.arange(1, 366)

temperature = 25 + 10 * np.sin(2 * np.pi * days / 365) + np.random.normal(0, 2, 365)
humidity = 60 + 20 * np.sin(2 * np.pi * days / 365) + np.random.normal(0, 5, 365)
light_intensity = 10000 + 5000 * np.sin(2 * np.pi * days / 365) + np.random.normal(0, 1000, 365)
co2_levels = 400 + np.random.normal(0, 50, 365)
water_supply = np.random.uniform(0.5, 2.0, 365)
nutrient_concentration = np.random.uniform(1, 5, 365)
soil_moisture = np.random.uniform(20, 40, 365)

seedling_height = (
    10 + 
    0.5 * temperature + 
    0.3 * (light_intensity / 1000) + 
    np.random.normal(0, 1, 365)
)
leaf_count = np.random.randint(3, 10, 365)
root_length = (
    5 + 
    0.2 * water_supply + 
    0.1 * soil_moisture + 
    np.random.normal(0, 0.5, 365)
)
plant_weight = seedling_height * 0.8 + np.random.normal(0, 5, 365)
leaf_area = seedling_height * 1.5 + np.random.normal(0, 2, 365)
health_score = np.clip(np.random.normal(7, 1.5, 365), 1, 10)

df = pd.DataFrame({
    'Day': days,
    'Temperature (°C)': temperature,
    'Humidity (%)': humidity,
    'Light Intensity (lux)': light_intensity,
    'CO2 Levels (ppm)': co2_levels,
    'Water Supply (L/day)': water_supply,
    'Nutrient Concentration (%)': nutrient_concentration,
    'Soil Moisture (%)': soil_moisture,
    'Seedling Height (cm)': seedling_height,
    'Leaf Count': leaf_count,
    'Root Length (cm)': root_length,
    'Plant Weight (g)': plant_weight,
    'Leaf Area (cm²)': leaf_area,
    'Health Score': health_score
})

print(df.head())
df.to_csv('realistic_rice_seedling_data.csv', index=False)
