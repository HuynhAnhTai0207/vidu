import React, { useState, useEffect, useRef } from 'react';
import SimpleWebRTC from 'simplewebrtc';

const VideoCall = () => {
    const localVideoRef = useRef(null);
    const remoteVideoRef = useRef(null);
    const webrtcRef = useRef(null);
    const [isCalling, setIsCalling] = useState(false);

    useEffect(() => {
        if (isCalling) {
            const webrtc = new SimpleWebRTC({
                localVideoEl: localVideoRef.current,
                remoteVideoEl: remoteVideoRef.current,
                autoRequestMedia: true,
            });
            webrtcRef.current = webrtc;

            webrtc.on('readyToCall', () => {
                webrtc.joinRoom('room-id');
            });

            return () => {
                webrtc.leaveRoom();
                webrtc.stopLocalVideo();
                webrtc.disconnect();
            };
        }
    }, [isCalling]);

    const handleStartCall = () => {
        setIsCalling(true);
    };

    const handleStopCall = () => {
        setIsCalling(false);
    };

    return (
        <div>
            {isCalling && (
                <>
                    <video ref={localVideoRef} autoPlay muted />
                    <video ref={remoteVideoRef} autoPlay />
                    <button onClick={handleStopCall}>Stop Call</button>
                </>
            )}
            {!isCalling && <button onClick={handleStartCall}>Start Call</button>}
        </div>
    );
};

export default VideoCall;