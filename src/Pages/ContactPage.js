import React, { useState } from "react";
import Card from "../components/Card";
import pucLogo from "../assets/puc-logo.png";
import Button from "../components/Button";
import { MdQrCodeScanner } from "react-icons/md";
import Popup from "../components/Popup";

const ContactPage = () => {
  const [showQRcode, setShowQRcode] = useState(false);

  const contactData = [
    { title: "DAA OFFICE", mobile: "017 392 169", telegram: "017 392 169" },
    { title: "Registra", mobile: "017 392 169", telegram: "017 392 169" },
    { title: "Head Office", mobile: "017 392 169", telegram: "017 392 169" },
    { title: "Library", mobile: "017 392 169", telegram: "017 392 169" },
    { title: "DAA OFFICE", mobile: "017 392 169", telegram: "017 392 169" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-semibold my-8">Find PUC Contact</h1>
      <div className="absolute left-0 right-0 flex overflow-x-auto no-scrollbar pl-10 py-4 flex-nowrap">
        {contactData.map((item) => (
          <Card className="bg-white text-blue-900 relative mr-5">
            <div className="h-2/5 bg-gradient-to-t from-blue-200 px-6 py-4 relative">
              <img
                src={pucLogo}
                className="absolute right-6 top-6"
                alt="PUC LOGO"
                style={{ width: "70px", height: "70px" }}
              />
              <div className="flex items-end h-full">
                <h1 className="text-3xl font-semibold">{item?.title}</h1>
              </div>
            </div>
            <div className="h-3/5 p-6">
              <div className="flex flex-col gap-3 mb-8 mt-2">
                <span className="font-normal">Mobile</span>
                <span className="font-semibold text-2xl">{item?.mobile}</span>
              </div>
              <div className="flex flex-col gap-3 relative">
                <span className="font-normal">Telegram</span>
                <span className="font-semibold text-2xl">{item?.telegram}</span>
                <button onClick={() => setShowQRcode(true)}>
                  <MdQrCodeScanner
                    size={50}
                    className="absolute right-0 top-2"
                  />
                </button>
              </div>
              <div className="flex justify-center absolute bottom-6 left-0 right-0">
                <Button text={"Call"} />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {showQRcode && (
        <Popup
          onButtonClick={() => setShowQRcode(false)}
          isDescriptionOnTop={true}
          title="Scan the QR Code"
          description="Scan This QR code for Contact"
          imgSrc="https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg"
        />
      )}
    </div>
  );
};

export default ContactPage;
