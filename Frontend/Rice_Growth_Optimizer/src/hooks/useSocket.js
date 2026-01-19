// src/hooks/useSocket.js
import { useEffect } from 'react';
import { io } from 'socket.io-client';


const socket = io('http://localhost:5000'); // Or your backend IP if remote

function useSocket(setData) {
    useEffect(() => {
        socket.on('sensor_update', (data) => {
            console.log("Received socket data:", data);
            setData(data); // Update the state from context or component
        });

        return () => { socket.off('sensor_update') }// Clean up on unmount
    }, [setData]);
}

export default useSocket;