import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  onSnapshot,
  deleteDoc,
  addDoc,
} from "firebase/firestore";
import React, { useState, useRef, useEffect } from "react";

// Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "rtcpuc.firebaseapp.com",
  projectId: "rtcpuc",
  storageBucket: "rtcpuc.appspot.com",
  messagingSenderId: "874247322664",
  appId: "1:874247322664:web:50eefe2040da46636f891d",
  measurementId: "G-R0KP2TRQTE",
};

// Initialize Firebase app instance
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

// RTC configuration
const servers = {
  iceServers: [
    {
      urls: ["stun:stun1.l.google.com:19302", "stun:stun2.l.google.com:19302"],
    },
  ],
  iceCandidatePoolSize: 10,
};

const ClientCall = () => {
  const [pc] = useState(new RTCPeerConnection(servers));
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream] = useState(new MediaStream());
  const [callId, setCallId] = useState("");
  const [callStatus, setCallStatus] = useState("idle"); // idle, calling, ongoing
  const [isWebcamButtonDisabled, setIsWebcamButtonDisabled] = useState(false);

  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);

  // Function to start webcam and initialize local media stream
  const startWebcam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      setLocalStream(stream);
      setIsWebcamButtonDisabled(true);
    } catch (error) {
      console.error("Error accessing media devices.", error);
    }
  };

  // Function to initiate a call
  const initiateCall = async () => {
    setCallStatus("calling");
    const callDocRef = doc(collection(firestore, "calls"));
    const offerCandidatesRef = collection(callDocRef, "offerCandidates");

    setCallId(callDocRef.id);

    pc.onicecandidate = (event) => {
      event.candidate && addDoc(offerCandidatesRef, event.candidate.toJSON());
    };

    const offerDescription = await pc.createOffer();
    await pc.setLocalDescription(offerDescription);

    const offer = {
      sdp: offerDescription.sdp,
      type: offerDescription.type,
    };

    await setDoc(callDocRef, { offer });

    // Store call ID in shared collection
    const sharedDocRef = doc(collection(firestore, "shared"), "callId");
    await setDoc(sharedDocRef, { id: callDocRef.id });

    onSnapshot(callDocRef, (snapshot) => {
      const data = snapshot.data();
      if (data?.answer) {
        const answerDescription = new RTCSessionDescription(data.answer);
        pc.setRemoteDescription(answerDescription);
        setCallStatus("ongoing");
      }
    });
  };

  // Function to cancel a call
  const cancelCall = async () => {
    if (callId) {
      // Delete call document
      await deleteDoc(doc(firestore, "calls", callId));

      // Remove call ID from shared collection
      const sharedDocRef = doc(collection(firestore, "shared"), "callId");
      await deleteDoc(sharedDocRef);

      setCallId("");
      setCallStatus("idle");
    }
  };

  // Function to hang up the call
  const hangUp = async () => {
    pc.close();
    if (callId) {
      // Delete call document
      await deleteDoc(doc(firestore, "calls", callId));

      // Remove call ID from shared collection
      const sharedDocRef = doc(collection(firestore, "shared"), "callId");
      await deleteDoc(sharedDocRef);
    }
    setLocalStream(null);
    setCallStatus("idle");
    setIsWebcamButtonDisabled(false);
    if (localVideoRef.current) localVideoRef.current.srcObject = null;
    if (remoteVideoRef.current) localVideoRef.current.srcObject = null;
  };

  // useEffect to handle setting up and tearing down media streams
  useEffect(() => {
    if (localStream) {
      localStream.getTracks().forEach((track) => {
        pc.addTrack(track, localStream);
      });

      pc.ontrack = (event) => {
        event.streams[0].getTracks().forEach((track) => {
          remoteStream.addTrack(track);
        });
      };

      if (localVideoRef.current) {
        localVideoRef.current.srcObject = localStream;
      }

      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = remoteStream;
      }
    }
  }, [localStream, pc, remoteStream]);

  return (
    <div>
      <h1>WebRTC Client Call</h1>
      <div>
        <button
          id="webcamButton"
          onClick={startWebcam}
          disabled={isWebcamButtonDisabled}
        >
          Start Webcam
        </button>
        <video
          id="webcamVideo"
          autoPlay
          playsInline
          ref={localVideoRef}
          style={{ width: "300px" }}
        />
      </div>
      <div>
        {callStatus === "idle" && (
          <button id="callButton" onClick={initiateCall}>
            Call
          </button>
        )}
        {callStatus === "calling" && (
          <>
            <p>Calling...</p>
            <button id="cancelCallButton" onClick={cancelCall}>
              Cancel Call
            </button>
          </>
        )}
        {callStatus === "ongoing" && (
          <>
            <p>Call in Progress</p>
            <button id="hangupButton" onClick={hangUp}>
              Hang Up
            </button>
          </>
        )}
      </div>
      <div>
        <video
          id="remoteVideo"
          autoPlay
          playsInline
          ref={remoteVideoRef}
          style={{ width: "300px" }}
        />
      </div>
    </div>
  );
};

export default ClientCall;
