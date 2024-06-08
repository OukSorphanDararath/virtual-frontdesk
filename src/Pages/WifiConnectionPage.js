import React, { useState } from "react";
import Popup from "../components/Popup";
import RoomNavigationPage from "./RoomNavigationPage";

const WifiConnectionPage = () => {
  return (
    <div>
      {/* <Popup
        onButtonClick={() => window.history.back()}
        title="Scan the QR Code To Connect to Wi-Fi"
        description="Scan This QR code to easily connect to the PUC's free Wi-Fi"
        imgSrc="https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg"
      /> */}

      <RoomNavigationPage />
    </div>
  );
};

export default WifiConnectionPage;
