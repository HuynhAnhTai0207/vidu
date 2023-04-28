import React, { useState } from 'react';

const Chat = () => {
    const [file, setFile] = useState(null);
    const [websocket, setWebsocket] = useState(null);

    const handleFileChange = (event) => {
        const fileReader = new FileReader();
        fileReader.onload = () => {
            const fileData = fileReader.result;
            websocket.send(fileData);
        };
        fileReader.readAsArrayBuffer(event.target.files[0]);
    };

    const handleWebsocketOpen = () => {
        console.log('WebSocket connected');
    };

    const handleWebsocketMessage = (event) => {
        console.log(`WebSocket message received: ${event.data}`);
    };

    const handleWebsocketClose = () => {
        console.log('WebSocket disconnected');
    };

    const connectWebsocket = () => {
        const ws = new WebSocket('ws://140.238.54.136:8080/chat/chat');
        ws.onopen = handleWebsocketOpen;
        ws.onmessage = handleWebsocketMessage;
        ws.onclose = handleWebsocketClose;
        setWebsocket(ws);
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={connectWebsocket}>Connect WebSocket</button>
        </div>
    );
};

export default Chat;