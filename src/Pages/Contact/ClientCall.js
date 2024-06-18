import React, { useState } from "react";
import { firestore } from "../../firebase"; // Adjust the path as needed

const ClientCall = () => {
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const [callId, setCallId] = useState("");
  const [isCalling, setIsCalling] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isHangupDisabled, setIsHangupDisabled] = useState(true);

  // RTCPeerConnection configuration
  const servers = {
    iceServers: [
      {
        urls: [
          "stun:stun1.l.google.com:19302",
          "stun:stun2.l.google.com:19302",
        ],
      },
    ],
    iceCandidatePoolSize: 10,
  };

  let pc = null;

  const startCall = async () => {
    try {
      setIsCalling(true);

      // Initialize RTCPeerConnection
      pc = new RTCPeerConnection(servers);

      // Get local media stream
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      setLocalStream(stream);

      // Show local video
      const webcamVideo = document.getElementById("webcamVideo");
      webcamVideo.srcObject = stream;

      // Add tracks from local stream to RTCPeerConnection
      stream.getTracks().forEach((track) => {
        pc.addTrack(track, stream);
      });

      // Listen for remote tracks
      pc.ontrack = (event) => {
        if (event.streams && event.streams[0]) {
          setRemoteStream(event.streams[0]);
        }
      };

      // Create offer
      const offer = await pc.createOffer();
      await pc.setLocalDescription(offer);

      // Reference Firestore collections
      const callDocRef = await firestore.collection("calls").add({});
      const callId = callDocRef.id;
      setCallId(callId);

      const offerCandidates = callDocRef.collection("offerCandidates");
      await offerCandidates.add({ offer: offer.toJSON() });

      // Listen for answer
      callDocRef.onSnapshot((snapshot) => {
        const data = snapshot.data();
        if (!pc.currentRemoteDescription && data?.answer) {
          const answer = new RTCSessionDescription(data.answer);
          pc.setRemoteDescription(answer);
        }
      });

      setIsConnected(true);
      setIsHangupDisabled(false);
    } catch (error) {
      console.error("Error starting call:", error);
    }
  };

  const hangupCall = async () => {
    // Close RTCPeerConnection
    if (pc) {
      pc.close();
    }

    // Remove call ID from shared document
    await firestore.collection("shared").doc("callId").delete();

    // Clean up local media streams
    if (localStream) {
      localStream.getTracks().forEach((track) => {
        track.stop();
      });
    }

    setLocalStream(null);
    setRemoteStream(null);
    setCallId("");
    setIsCalling(false);
    setIsConnected(false);
    setIsHangupDisabled(true);
  };

  return (
    <div>
      <h1>Client Call</h1>
      <div>
        <video id="webcamVideo" autoPlay muted></video>
        {remoteStream && (
          <video id="remoteVideo" autoPlay srcObject={remoteStream}></video>
        )}
      </div>
      {!isCalling && (
        <button onClick={startCall} disabled={isCalling}>
          Start Call
        </button>
      )}
      {isCalling && (
        <button onClick={hangupCall} disabled={isHangupDisabled}>
          Hang Up
        </button>
      )}
      <p>Call ID: {callId}</p>
      {isCalling && <p>Calling...</p>}
      {isConnected && <p>Connected!</p>}
    </div>
  );
};

export default ClientCall;
