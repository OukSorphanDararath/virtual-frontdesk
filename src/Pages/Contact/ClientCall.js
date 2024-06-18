import React, { useState, useEffect, useRef } from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  addDoc,
  onSnapshot,
} from "firebase/firestore";
// import "./style.css";

// Firebase configuration
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
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

const ClientCall = () => {
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const [callId, setCallId] = useState("");
  const [isCalling, setIsCalling] = useState(false);
  const pc = useRef(
    new RTCPeerConnection({
      iceServers: [
        {
          urls: [
            "stun:stun1.l.google.com:19302",
            "stun:stun2.l.google.com:19302",
          ],
        },
      ],
      iceCandidatePoolSize: 10,
    })
  );

  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);

  useEffect(() => {
    if (localStream) {
      localVideoRef.current.srcObject = localStream;
    }
    if (remoteStream) {
      remoteVideoRef.current.srcObject = remoteStream;
    }
  }, [localStream, remoteStream]);

  const startWebcam = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    setLocalStream(stream);

    stream.getTracks().forEach((track) => {
      pc.current.addTrack(track, stream);
    });

    pc.current.ontrack = (event) => {
      const remoteStream = event.streams[0];
      setRemoteStream(remoteStream);
    };
  };

  const makeCall = async () => {
    const callDoc = doc(collection(firestore, "calls"));
    const offerCandidates = collection(callDoc, "offerCandidates");
    const answerCandidates = collection(callDoc, "answerCandidates");

    setCallId(callDoc.id);
    setIsCalling(true);

    await setDoc(doc(firestore, "shared", "callId"), { id: callDoc.id });

    pc.current.onicecandidate = (event) => {
      if (event.candidate) {
        addDoc(offerCandidates, event.candidate.toJSON());
      }
    };

    const offerDescription = await pc.current.createOffer();
    await pc.current.setLocalDescription(offerDescription);

    await setDoc(callDoc, {
      offer: { type: offerDescription.type, sdp: offerDescription.sdp },
    });

    onSnapshot(callDoc, (snapshot) => {
      const data = snapshot.data();
      if (!pc.current.currentRemoteDescription && data?.answer) {
        const answerDescription = new RTCSessionDescription(data.answer);
        pc.current.setRemoteDescription(answerDescription);
      }
    });

    onSnapshot(answerCandidates, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          const candidate = new RTCIceCandidate(change.doc.data());
          pc.current.addIceCandidate(candidate);
        }
      });
    });
  };

  const cancelCall = async () => {
    if (callId) {
      const callDoc = doc(firestore, "calls", callId);
      await callDoc.delete();
      await setDoc(doc(firestore, "shared", "callId"), { id: "" });
      setCallId("");
      setIsCalling(false);
      setRemoteStream(null);
      if (localStream) {
        localStream.getTracks().forEach((track) => track.stop());
        setLocalStream(null);
      }
    }
  };

  return (
    <div className="client-call">
      <video
        ref={localVideoRef}
        autoPlay
        playsInline
        muted
        className="local-video"
      />
      <video
        ref={remoteVideoRef}
        autoPlay
        playsInline
        className="remote-video"
      />
      <div>
        {!isCalling ? (
          <button onClick={startWebcam}>Start Webcam</button>
        ) : (
          <button onClick={cancelCall}>Cancel Call</button>
        )}
        <button onClick={makeCall} disabled={isCalling}>
          Make Call
        </button>
      </div>
    </div>
  );
};

export default ClientCall;
