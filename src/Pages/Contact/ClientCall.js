import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";

const apiBaseUrl = process.env.REACT_APP_API_KEY;

const socket = io(apiBaseUrl); // Replace with your server URL

const ClientCall = () => {
  const [localStream, setLocalStream] = useState(null);
  const [calling, setCalling] = useState(false);
  const [callAccepted, setCallAccepted] = useState(false);
  const videoRef = useRef(null);
  const peerConnectionRef = useRef(null);

  useEffect(() => {
    const setupLocalStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        setLocalStream(stream);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing media devices:", error);
        alert(`Error accessing media devices: ${error.message}`);
      }
    };

    setupLocalStream();

    socket.on("answer", async (answer) => {
      const pc = peerConnectionRef.current;
      if (pc) {
        await pc.setRemoteDescription(new RTCSessionDescription(answer));
        setCallAccepted(true);
      }
    });

    socket.on("icecandidate", async (candidate) => {
      const pc = peerConnectionRef.current;
      if (pc && candidate) {
        await pc.addIceCandidate(new RTCIceCandidate(candidate));
      }
    });

    return () => {
      if (localStream) {
        localStream.getTracks().forEach((track) => track.stop());
        setLocalStream(null);
      }
      if (peerConnectionRef.current) {
        peerConnectionRef.current.close();
        peerConnectionRef.current = null;
      }
      socket.off("answer");
      socket.off("icecandidate");
    };
  }, []);

  const handleCall = async () => {
    if (!localStream) return;

    const pc = new RTCPeerConnection();
    peerConnectionRef.current = pc;

    localStream.getTracks().forEach((track) => pc.addTrack(track, localStream));

    pc.onicecandidate = (event) => {
      if (event.candidate) {
        socket.emit("icecandidate", event.candidate);
      }
    };

    try {
      const offer = await pc.createOffer();
      await pc.setLocalDescription(offer);
      socket.emit("offer", offer);
      setCalling(true);
    } catch (error) {
      console.error("Error creating offer.", error);
    }
  };

  const handleCloseCall = () => {
    if (peerConnectionRef.current) {
      peerConnectionRef.current.close();
      peerConnectionRef.current = null;
    }
    setCalling(false);
    setCallAccepted(false);
  };

  return (
    <div>
      <h1>Client Side</h1>
      {localStream && <video ref={videoRef} autoPlay />}
      {!calling && !callAccepted && (
        <button onClick={handleCall}>Call Admin</button>
      )}
      {(calling || callAccepted) && (
        <button onClick={handleCloseCall}>Close Call</button>
      )}
    </div>
  );
};

export default ClientCall;
