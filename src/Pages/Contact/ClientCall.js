// ClientCall.js

import React, { useState, useEffect, useRef } from "react";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  deleteDoc,
  addDoc,
  onSnapshot,
} from "firebase/firestore";
import { app, firestore } from "../../config/firebase"; // Import from the created firebase.js file

import "tailwindcss/tailwind.css";
import { IoCall } from "react-icons/io5";
import { FaPhoneSlash } from "react-icons/fa6";
import { PiWebcamDuotone, PiWebcamSlashDuotone } from "react-icons/pi";

import Button from "../../components/Button";

const ClientCall = () => {
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const [callId, setCallId] = useState("");
  const [isCalling, setIsCalling] = useState(false);
  const [cameraOn, setCameraOn] = useState(true); // To control camera state
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
    try {
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
    } catch (error) {
      console.error("Error accessing media devices.", error);
    }
  };

  const makeCall = async () => {
    try {
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
    } catch (error) {
      console.error("Error making call:", error);
    }
  };

  const cancelCall = async () => {
    try {
      if (callId) {
        const callDoc = doc(firestore, "calls", callId);

        // Delete the call document from Firestore
        await deleteDoc(callDoc);

        // Reset the shared call ID in Firestore
        await setDoc(doc(firestore, "shared", "callId"), { id: "" });

        // Close the peer connection
        pc.current.close();

        // Reset states
        setCallId("");
        setIsCalling(false);
        setRemoteStream(null);

        // Stop all local media tracks
        if (localStream) {
          localStream.getTracks().forEach((track) => track.stop());
          setLocalStream(null);
        }

        // Create a new peer connection for a new call
        pc.current = new RTCPeerConnection({
          iceServers: [
            {
              urls: [
                "stun:stun1.l.google.com:19302",
                "stun:stun2.l.google.com:19302",
              ],
            },
          ],
          iceCandidatePoolSize: 10,
        });
      }
    } catch (error) {
      console.error("Error canceling call:", error);
    }
  };

  const toggleCamera = () => {
    if (localStream) {
      localStream
        .getVideoTracks()
        .forEach((track) => (track.enabled = !track.enabled));
      setCameraOn(!cameraOn);
    }
  };

  return (
    <div className="flex p-10 gap-10 h-full bg-black/50 rounded-3xl">
      <div className="relative basis-4/6 w-full text-center flex justify-center h-full rounded-2xl border-2 border-gray-500 bg-black overflow-hidden">
        {!remoteStream && isCalling && (
          <div className="absolute inset-0 flex items-center justify-center text-white text-xl">
            Calling...
          </div>
        )}
        <div>
          <video
            ref={remoteVideoRef}
            autoPlay
            playsInline
            className="w-[80%] h-[100%] object-cover"
          />
        </div>
      </div>
      <div className="basis-2/6 w-full h-full ">
        <div className="border-2 border-gray-500 rounded-2xl h-80 overflow-hidden">
          <video
            ref={localVideoRef}
            autoPlay
            playsInline
            muted
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-2 mt-10">
          {!isCalling ? (
            <div className="gap-4 flex flex-col justify-center items-center">
              <Button
                onClick={startWebcam}
                className="px-4 py-2 bg-green-600 w-56 text-white rounded flex items-center justify-center gap-2 hover:bg-green-700"
                text={
                  <>
                    <PiWebcamDuotone size={26} />
                    Start Webcam
                  </>
                }
              ></Button>
              <Button
                onClick={makeCall}
                className="px-4 py-2 bg-blue-500 text-white rounded flex items-center justify-center gap-2 w-56 hover:bg-blue-600"
                text={
                  <>
                    <IoCall />
                    Make Call
                  </>
                }
              ></Button>
            </div>
          ) : (
            <div className="gap-4 flex flex-col justify-center items-center">
              <Button
                onClick={toggleCamera}
                className={`px-4 py-2 bg-gray-500 text-white rounded flex items-center justify-center gap-2 w-56 hover:bg-gray-600`}
                text={
                  cameraOn ? (
                    <>
                      <PiWebcamSlashDuotone />
                      Turn Off Camera
                    </>
                  ) : (
                    <>
                      <PiWebcamDuotone />
                      Turn On Camera
                    </>
                  )
                }
              ></Button>
              <Button
                onClick={cancelCall}
                className="px-4 py-2 bg-red-500 text-white rounded flex items-center justify-center gap-2 w-56 hover:bg-red-600"
                text={
                  <>
                    <FaPhoneSlash />
                    Cancel Call
                  </>
                }
              ></Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClientCall;
