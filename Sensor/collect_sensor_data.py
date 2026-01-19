# -*- coding: utf-8 -*-
import time
import board
import adafruit_dht
import busio
import digitalio
import json
from adafruit_mcp3xxx.mcp3008 import MCP3008, P0, P1
from adafruit_mcp3xxx.analog_in import AnalogIn

sensor = adafruit_dht.DHT22(board.D17)

spi = busio.SPI(clock=board.SCK, MISO=board.MISO, MOSI=board.MOSI)

cs = digitalio.DigitalInOut(board.D8)  # CE0 pin

mcp = MCP3008(spi, cs)

chan_s = AnalogIn(mcp, P0)

chan_l = AnalogIn(mcp, P1)

def update_sensor_data(new_data, file_path=r"..\Frontend\flask-api\sensor_data.json"):
    try:
        # Load existing data
        with open(file_path, 'r') as f:
            data = json.load(f)
        
        # Update with new values
        data.update(new_data)

        # Write back to file
        with open(file_path, 'w') as f:
            json.dump(data, f, indent=4)

        print("Sensor data updated:", new_data)
    except Exception as e:
        print("Error updating sensor data:", e)

while True:
    try:
        # Print the values to the serial port
        temperature_c = sensor.temperature
        humidity = sensor.humidity
        print("Temp={0:0.1f}ºC, Temp={1:0.1f}ºF, Humidity={2:0.1f}%".format(temperature_c, humidity))

    except RuntimeError as error:
        print(error.args[0])
        time.sleep(2.0)
        continue
    except Exception as error:
        sensor.exit()
        raise error

    moisture_value = chan_s.value  # 16-bit scaled value (0-65535)
    voltage_s = chan_s.voltage       # voltage value (0-3.3V)

    percent_s = (moisture_value / 65535) * 100

    print(f"Raw Value: {moisture_value}, Voltage: {voltage_s:.2f} V, Moisture: {percent_s:.2f}")

    light_value = chan_l.value - 55000  # 16-bit scaled value (0-65535)
    voltage_l = chan_l.voltage       # voltage value (0-3.3V)

    percent_l = (light_value / 65535) * 100

    print(f"Raw Value: {light_value}, Voltage: {voltage_l:.2f} V, Light: {percent_l:.2f}")

    update_sensor_data({
    "temperature": temperature_c,
    "humidity": humidity,
    "light_intensity": light_value,
    "soil_moisture": percent_s,
    "co2_level": 400
    })

    time.sleep(15)