import React, { useEffect, useState } from "react";
import SearchBox from "../components/SearchBox";
import { floorAndRoomData } from "../data/dataSource";

const RoomNavigationPage = () => {
  const [selectedFloor, setSelectedFloor] = useState();
  const [selectedRoom, setSelectedRoom] = useState();

  useEffect(() => {
    setSelectedFloor(floorAndRoomData[0]);
  }, []);

  return (
    <div className="h-full">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold my-8">ToulKork Campus</h1>
        <SearchBox
          floorAndRoomData={floorAndRoomData}
          onRoomSelect={(d) => {
            setSelectedFloor(d?.floor);
            setSelectedRoom(d?.room);
          }}
        />
      </div>
      <div className="w-full h-3/4 rounded-xl flex overflow-hidden shadow-md bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
        <div className="w-52 flex flex-col font-medium text-lg ">
          <h1 className="text-center mt-8 mb-10">Floor Map</h1>
          <ul className="flex-1 flex flex-col overflow-y-auto no-scrollbar gap-2">
            {floorAndRoomData.map((floor) => (
              <li
                className={`text-center  py-2 rounded-r-xl hover:shadow-sm cursor-pointer ${
                  selectedFloor?.id === floor?.id && "bg-blue-900"
                }`}
                onClick={() => {
                  setSelectedFloor(floor);
                  setSelectedRoom(undefined);
                }}
              >
                {floor.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full flex bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
          <div className="flex-1 p-10">
            <div className="w-full h-full overflow-hidden rounded-2xl bg-white">
              <img
                src={selectedRoom?.img ?? selectedFloor?.img}
                alt={selectedRoom?.name ?? selectedFloor?.name}
                className="object-contain h-full w-full"
              />
            </div>
          </div>
          <ul className="flex-1 columns-2 gap-4 pt-10 font-light text-xl pr-6">
            {selectedFloor?.rooms?.map((room, index) => (
              <li
                className={`p-4 flex gap-2 mb-4 rounded-2xl cursor-pointer ${
                  selectedRoom?.id === room?.id && "bg-white/10"
                }`}
                onClick={() => setSelectedRoom(room)}
              >
                <span>{index + 1}.</span>
                <span>{room?.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RoomNavigationPage;
