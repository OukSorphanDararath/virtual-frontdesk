import React from "react";
import Popup from "../components/Popup";

const WifiConnectionPage = () => {
  return (
    <div>
      <Popup
        title="Scan the QR Code To Connect to Wi-Fi"
        description="Scan This QR code to easily connect to the PUC's free Wi-Fi"
        imgSrc="https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg"
      />
    </div>
  );
};

export default WifiConnectionPage;
