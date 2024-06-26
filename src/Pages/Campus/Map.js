import React, { useState } from "react";
import Button from "../../components/Button";
import Popup from "../../components/Popup";

const Map = () => {
  const [showQRcode, setShowQRcode] = useState(false);

  return (
    <div className="w-full h-full">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold my-8">Toul Kork Campus</h1>
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7817.4095970652725!2d104.88086342811582!3d11.573007350416415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519ddd4a8ed3%3A0x660cf2d7dd0c0ce6!2sPa%C3%B1%C3%B1%C4%81s%C4%81stra%20University%20of%20Cambodia%20-%20Tuol%20Kork%20Campus!5e0!3m2!1sen!2skh!4v1717910610542!5m2!1sen!2skh"
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
          imgSrc="https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg"
        />
      )}
    </div>
  );
};

export default Map;
