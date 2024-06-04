import React from "react";
import Card from "../components/Card";
import pucLogo from "../assets/puc-logo.png";
import Button from "../components/Button";
import { MdQrCodeScanner } from "react-icons/md";

const ContactPage = () => {
  const contactData = [
    { title: "DAA OFFICE", mobile: "017 392 169", telegram: "017 392 169" },
    { title: "Registra", mobile: "017 392 169", telegram: "017 392 169" },
    { title: "Head Office", mobile: "017 392 169", telegram: "017 392 169" },
    { title: "Library", mobile: "017 392 169", telegram: "017 392 169" },
    { title: "DAA OFFICE", mobile: "017 392 169", telegram: "017 392 169" },
  ];

  return (
    <div className="relative">
      <h1 className="text-3xl font-semibold my-8">Find PUC Contact</h1>
      <div className="absolute left-0 -right-10 flex overflow-x-auto no-scrollbar flex-nowrap gap-5">
        {contactData.map((item) => (
          <Card className="bg-white text-blue-900 relative">
            <div className="h-2/5 bg-gradient-to-t from-blue-200 p-4 relative">
              <img
                src={pucLogo}
                className="absolute right-4 top-4"
                alt="PUC LOGO"
                style={{ width: "70px", height: "70px" }}
              />
              <div className="flex items-end h-full">
                <h1 className="text-3xl font-semibold">{item?.title}</h1>
              </div>
            </div>
            <div className="h-3/5 p-4">
              <div className="flex flex-col gap-3 mb-10 mt-2">
                <span className="font-normal">Mobile</span>
                <span className="font-semibold text-2xl">{item?.mobile}</span>
              </div>
              <div className="flex flex-col gap-3 relative">
                <span className="font-normal">Telegram</span>
                <span className="font-semibold text-2xl">{item?.telegram}</span>
                <MdQrCodeScanner size={50} className="absolute right-0 top-2" />
              </div>
              <div className="flex justify-center absolute bottom-4 left-0 right-0">
                <Button text={"Call"} />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ContactPage;
