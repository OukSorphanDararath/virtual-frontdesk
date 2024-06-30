import React from "react";
import Widget from "./Widget";
import { useTranslation } from "react-i18next";
import contact from "../assets/widgets/contact.svg";
import campus from "../assets/widgets/campus.svg";
import schedule from "../assets/widgets/schedule.svg";
import wifi from "../assets/widgets/wifi.svg";
import className from "../assets/widgets/classroom.svg";
import faculties from "../assets/widgets/Frame 243.svg";

const WidgetContent = () => {
  const { t } = useTranslation();

  const widgetData = [
    {
      id: 1,
      title: "View Class Schedule",
      url: "/schedules",
      icon: <img src={schedule} alt="0" />,
    },
    {
      id: 2,
      title: "Contact Information",
      url: "/contacts",
      icon: <img src={contact} alt="1" />,
    },
    {
      id: 3,
      title: "Connect to Free Wifi",
      url: "/wificonnection",
      icon: <img src={wifi} alt="1" />,
    },
    {
      id: 4,
      title: "Find PUC Campus",
      url: "/campus",
      icon: <img src={campus} alt="1" />,
    },
    {
      id: 5,
      title: "View PUC Faculty",
      url: "/faculties",
      icon: <img src={faculties} alt="1" />,
    },
    {
      id: 6,
      title: "Find Classroom",
      url: "/find_room",
      icon: <img src={className} alt="1" />,
    },
  ];

  return (
    <div className="flex flex-col h-full">
      <h1 className="font-semibold text-2xl mb-6 mt-2">{t("choose_action")}</h1>
      <div className="h-full grid grid-cols-3 gap-4">
        {widgetData.map((item) => (
          <Widget
            id={item?.id}
            title={item?.title}
            icon={item?.icon}
            url={item?.url}
          />
        ))}
      </div>
    </div>
  );
};

export default WidgetContent;
