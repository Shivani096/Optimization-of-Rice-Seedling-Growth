from flask import Flask, jsonify
from flask_socketio import SocketIO
from flask_cors import CORS
import time
import json
from threading import Thread

app = Flask(__name__)
CORS(app)
socketio = SocketIO(app, cors_allowed_origins='*')

def read_sensor_data_from_file():
    try:
        with open('sensor_data.json', 'r') as f:
            return json.load(f)
    except Exception as e:
        print("Error reading sensor data:", e)
        return {}

# Emit data from the JSON file every 3 seconds
def emit_sensor_data():
    while True:
        data = read_sensor_data_from_file()
        socketio.emit('sensor_update', data)
        print("Emitted sensor data:", data)
        time.sleep(3)

@app.route('/api/sensor-data')
def get_sensor_data():
    return jsonify(read_sensor_data_from_file())

if __name__ == '__main__':
    Thread(target=emit_sensor_data).start()
    socketio.run(app, host='0.0.0.0', port=5000, debug=True)
