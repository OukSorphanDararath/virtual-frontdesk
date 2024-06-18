import React, { useState, useEffect, useRef } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdl8RxTB2X4E4PdR6lUNw0YCOVBPFgo8w",
  authDomain: "rtcpuc.firebaseapp.com",
  projectId: "rtcpuc",
  storageBucket: "rtcpuc.appspot.com",
  messagingSenderId: "874247322664",
  appId: "1:874247322664:web:50eefe2040da46636f891d",
  measurementId: "G-R0KP2TRQTE",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const firestore = firebase.firestore();

const ClientCall = () => {
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const [callId, setCallId] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [isHangupDisabled, setIsHangupDisabled] = useState(true);

  // Refs for accessing video elements
  const webcamVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);

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

  useEffect(() => {
    // Clean up any remaining streams and connections
    return () => {
      if (localStream) {
        localStream.getTracks().forEach((track) => track.stop());
      }
      if (remoteStream) {
        remoteStream.getTracks().forEach((track) => track.stop());
      }
      if (pc) {
        pc.close();
      }
    };
  }, []);

  const startWebcam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      setLocalStream(stream);
      if (webcamVideoRef.current) {
        webcamVideoRef.current.srcObject = stream;
      }
      pc = new RTCPeerConnection(servers);
      stream.getTracks().forEach((track) => pc.addTrack(track, stream));

      pc.ontrack = (event) => {
        if (event.streams && event.streams[0]) {
          setRemoteStream(event.streams[0]);
          if (remoteVideoRef.current) {
            remoteVideoRef.current.srcObject = event.streams[0];
          }
        }
      };

      const callDocRef = firestore.collection("calls").doc();
      const offerCandidates = callDocRef.collection("offerCandidates");
      const answerCandidates = callDocRef.collection("answerCandidates");

      pc.onicecandidate = (event) => {
        if (event.candidate) {
          offerCandidates.add(event.candidate.toJSON());
        }
      };

      const offer = await pc.createOffer();
      await pc.setLocalDescription(offer);

      const offerDescription = {
        type: offer.type,
        sdp: offer.sdp,
      };

      await callDocRef.set({ offer: offerDescription });

      callDocRef.onSnapshot(async (snapshot) => {
        const data = snapshot.data();
        if (!pc.currentRemoteDescription && data?.answer) {
          const answer = new RTCSessionDescription(data.answer);
          await pc.setRemoteDescription(answer);
        }
      });

      answerCandidates.onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            const candidate = new RTCIceCandidate(change.doc.data());
            pc.addIceCandidate(candidate);
          }
        });
      });

      setCallId(callDocRef.id);
      setIsConnected(true);
      setIsHangupDisabled(false);
    } catch (error) {
      console.error("Error starting webcam:", error);
    }
  };

  const hangupCall = async () => {
    // Close RTCPeerConnection
    if (pc) {
      pc.close();
    }

    // Remove call ID from shared document
    await firestore.collection("shared").doc("callId").delete();

    setLocalStream(null);
    setRemoteStream(null);
    setCallId("");
    setIsConnected(false);
    setIsHangupDisabled(true);
  };

  return (
    <div>
      <h1>Client Call</h1>
      <div>
        {localStream && (
          <video id="webcamVideo" autoPlay ref={webcamVideoRef}></video>
        )}
        {remoteStream && (
          <video id="remoteVideo" autoPlay ref={remoteVideoRef}></video>
        )}
      </div>
      {!isConnected && (
        <button onClick={startWebcam} disabled={!!localStream}>
          Start Webcam
        </button>
      )}
      {isConnected && (
        <button onClick={hangupCall} disabled={isHangupDisabled}>
          Hang Up
        </button>
      )}
      <p>Call ID: {callId}</p>
      {isConnected && <p>Connected!</p>}
    </div>
  );
};

export default ClientCall;
