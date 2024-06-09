import React from "react";
import Widget from "./Widget";
import {
  FcPlanner,
  FcCallback,
  FcWiFiLogo,
  FcDepartment,
  FcGraduationCap,
  FcOrganization,
} from "react-icons/fc";

const WidgetContent = () => {
  const widgetData = [
    {
      id: 1,
      title: "View Class Schedule",
      url: "/schedules",
      icon: <FcPlanner size={80} />,
    },
    {
      id: 2,
      title: "Contact Information",
      url: "/contacts",
      icon: <FcCallback size={80} />,
    },
    {
      id: 3,
      title: "Connect to Free Wifi",
      url: "/wificonnection",
      icon: <FcWiFiLogo size={80} />,
    },
    {
      id: 4,
      title: "Find PUC Campus",
      url: "/campus",
      icon: <FcDepartment size={80} />,
    },
    {
      id: 5,
      title: "View PUC Faculty",
      url: "/faculties",
      icon: <FcGraduationCap size={80} />,
    },
    {
      id: 6,
      title: "Find Classroom",
      url: "/find_room",
      icon: <FcOrganization size={80} />,
    },
  ];

  return (
    <div className="flex flex-col h-full">
      <h1 className="font-semibold text-2xl mb-6 mt-2">
        Choose Your Desire Action
      </h1>
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
