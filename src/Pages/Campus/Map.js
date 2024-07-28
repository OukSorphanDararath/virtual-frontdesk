import React, { useState } from "react";
import Button from "../../components/Button";
import Popup from "../../components/Popup";
import { useLocation } from "react-router-dom";

const Map = () => {
  const [showQRcode, setShowQRcode] = useState(false);

  const location = useLocation();
  const {title, qr, map } = location.state || {};

  return (
    <div className="w-full h-full">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold my-8">{title}</h1>
        <Button
          text={"Send Direct to Your Phone"}
          customClass={
            "bg-white self-end mb-4 text-blue-900 w-80 font-semibold hover:bg-gray-100 active:bg-gray-200"
          }
          onClick={() => setShowQRcode(true)}
        />
      </div>
      <div>
        <iframe
          title="campus_map"
          src={map}
          width="100%"
          height="500"
          className="rounded-lg border shadow-sm"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {showQRcode && (
        <Popup
          onButtonClick={() => setShowQRcode(false)}
          isDescriptionOnTop={true}
          title="Scan the QR Code"
          description="Scan This QR code for Location"
          imgSrc={qr}
        />
      )}
    </div>
  );
};

export default Map;
