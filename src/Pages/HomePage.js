import React from "react";
import MainHeader from "../components/MainHeader";
import Carousel from "../components/carousel";
import WidgetContent from "../components/WidgetContent";
import Announcement from "../components/Announcement";

const HomePage = () => {
  const carouselData = [
    {
      image: "https://www.puc.edu.kh/images/2024/5/main.png",
      title: "Image 1",
    },
    {
      image: "https://www.puc.edu.kh/images/2024/banner-puc-ifl.png",
      title: "Image 2",
    },
    {
      image:
        "https://www.puc.edu.kh/images/2016/annoucement-general/health-education/main.jpg",
      title: "Image 3",
    },
  ];

  return (
    <div className="h-full flex flex-col gap-y-4">
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
