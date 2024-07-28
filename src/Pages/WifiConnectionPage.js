import React from "react";
import Popup from "../components/Popup";
// import Loading from "../components/Loading";
import wifi from "../assets/puc-wifi.png";

const WifiConnectionPage = () => {
  return (
    <div>
      <Popup
        onButtonClick={() => window.history.back()}
        disableBackDrop={true}
        title="Scan the QR Code To Connect to Wi-Fi"
        description="Scan This QR code to easily connect to the PUC's free Wi-Fi"
        imgSrc={wifi}
      />
    </div>
    // <Loading />
  );
};

export default WifiConnectionPage;
