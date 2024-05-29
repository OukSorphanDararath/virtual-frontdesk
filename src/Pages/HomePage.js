import React from "react";
import MainHeader from "../components/MainHeader";
import Carousel from "../components/carousel";
import WidgetContent from "../components/WidgetContent";
import Announcement from "../components/Announcement";

const HomePage = () => {
  return (
    <div className="h-full flex flex-col gap-y-4">
      <MainHeader />
      {/* MAIN CONTENT */}
      <div className="flex-none h-48 flex flex-row gap-x-4">
        <Carousel />
        <Announcement />
      </div>
      {/* WIDGETS CONTENT */}
      <div className="flex-1 border">
        <WidgetContent />
      </div>
    </div>
  );
};

export default HomePage;
