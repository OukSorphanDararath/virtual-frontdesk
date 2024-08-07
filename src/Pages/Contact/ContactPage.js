import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import pucLogo from "../../assets/puc-logo.png";
import Button from "../../components/Button";
import { MdQrCodeScanner } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import Popup from "../../components/Popup";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/Loading";
const apiBaseUrl = process.env.REACT_APP_API_KEY;

const ContactPage = () => {
  const [showQRcode, setShowQRcode] = useState(null); // State to store the ID of the contact to show QR code for
  const [contactData, setContactData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const history = useHistory();

  useEffect(() => {
    axios
      .get(`${apiBaseUrl}/contacts`)
      .then((response) => {
        setContactData(response.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="flex justify-between ">
            <h1 className="text-3xl font-semibold my-8">Find PUC Contact</h1>
            <Button
              className={
                "self-end bg-white mb-4 font-semibold hover:bg-gray-100 active:bg-gray-200"
              }
              text={
                <div className="flex justify-center gap-2 items-center text-blue-950">
                  <IoCall />
                  <span>Talk to an agent</span>
                </div>
              }
              onClick={() => history.push("/call")}
            />
          </div>
          <div className="absolute left-0 right-0 flex overflow-x-auto no-scrollbar pl-10 py-4 flex-nowrap">
            {contactData?.map((item) => (
              <Card
                className="bg-white text-blue-900 relative mr-5 "
                key={item?._id}
              >
                <div className="h-2/5 bg-gradient-to-t from-blue-200 px-6 py-4 relative">
                  <img
                    src={pucLogo}
                    className="absolute right-6 top-6"
                    alt="PUC LOGO"
                    style={{ width: "70px", height: "70px" }}
                  />
                  <div className="flex items-end h-full">
                    <h1 className="text-3xl font-semibold">{item?.name}</h1>
                  </div>
                </div>
                <div className="h-3/5 p-6">
                  <div className="flex flex-col gap-3 mb-8 mt-2">
                    <span className="font-normal">Mobile</span>
                    <span className="font-semibold text-2xl">
                      {item?.phone}
                    </span>
                  </div>
                  <div className="flex flex-col gap-3 relative">
                    <span className="font-normal">Telegram</span>
                    <span className="font-semibold text-2xl">
                      {item?.telegram}
                    </span>
                  </div>
                  <div className="flex justify-center absolute bottom-6 left-0 right-0">
                    <Button
                      text={
                        <div className="flex justify-center gap-2 items-center">
                          <MdQrCodeScanner size={24} />
                          <span>Add Telegram</span>
                        </div>
                      }
                      onClick={() => setShowQRcode(item?._id)}
                    />
                  </div>
                </div>
                {showQRcode === item?._id && (
                  <Popup
                    onButtonClick={() => setShowQRcode(null)}
                    isDescriptionOnTop={true}
                    title="Scan the QR Code"
                    description="Scan This QR code for Contact"
                    imgSrc={item?.img}
                  />
                )}
              </Card>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ContactPage;
