import React from "react";
import MainHeader from "../components/MainHeader";
import Carousel from "../components/Carousel";
import WidgetContent from "../components/WidgetContent";
import Announcement from "../components/Announcement";
import { carouselData } from "../data/dataSource";

const HomePage = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 px-10 py-5">
      {/* HEADER */}
      <MainHeader />
      {/* MAIN CONTENT */}
      <div className="flex-none h-48 grid grid-cols-3 gap-4">
        <Carousel data={carouselData} />
        <Announcement data={carouselData} />
        {/* <Announcement /> */}
      </div>
      {/* WIDGETS CONTENT */}
      <div className="flex-1">
        <WidgetContent />
      </div>
    </div>
  );
};

export default HomePage;
