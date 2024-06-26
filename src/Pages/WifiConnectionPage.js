import React from "react";
import Popup from "../components/Popup";
// import Loading from "../components/Loading"; 

const WifiConnectionPage = () => {
  return (
    <div>
      <Popup
        onButtonClick={() => window.history.back()}
        disableBackDrop={true}
        title="Scan the QR Code To Connect to Wi-Fi"
        description="Scan This QR code to easily connect to the PUC's free Wi-Fi"
        imgSrc="https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg"
      />
    </div>
    // <Loading />
  );
};

export default WifiConnectionPage;
