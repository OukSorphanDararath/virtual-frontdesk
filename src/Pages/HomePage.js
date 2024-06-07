import React from "react";
import MainHeader from "../components/MainHeader";
import Carousel from "../components/carousel";
import WidgetContent from "../components/WidgetContent";
import Announcement from "../components/Announcement";

const HomePage = () => {
  const carouselData = [
    {
      image: "https://www.puc.edu.kh/images/2024/5/main.png",
      title:
        "Congratulations to Miss Lao Sokkeang, who has been granted a scholarship for the 6-month Student Exchange Program in Japan",
    },
    {
      image: "https://www.puc.edu.kh/images/2024/banner-puc-ifl.png",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce facilisis gravida nulla eu iaculis. Integer suscipit eu sem id accumsan. Nunc consequat ex turpis, eu tristique ante maximus quis. Ut a condimentum mi. Fusce at sem ut lorem semper rhoncus ac ut ante.",
    },
    {
      image:
        "https://www.puc.edu.kh/images/2016/annoucement-general/health-education/main.jpg",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce facilisis gravida nulla eu iaculis. Integer suscipit eu sem id accumsan. Nunc consequat ex turpis, eu tristique ante maximus quis. Ut a condimentum mi. Fusce at sem ut lorem semper rhoncus ac ut ante.",
    },
  ];

  return (
    <div className="h-full flex flex-col gap-y-4 px-10 py-5">
      <MainHeader />
      {/* MAIN CONTENT */}
      <div className="flex-none h-48 grid grid-cols-3 gap-4">
        <Carousel data={carouselData} />
        <Announcement />
      </div>
      {/* WIDGETS CONTENT */}
      <div className="flex-1">
        <WidgetContent />
      </div>
    </div>
  );
};

export default HomePage;
