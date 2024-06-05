import React from "react";
import SearchBox from "../components/SearchBox";

const RoomNavigationPage = () => {
  const floorAndRoomData = [
    {
      id: 1,
      name: "1st Floor",
      rooms: [
        { id: 1, name: "Somdach Chhounath Hall" },
        { id: 2, name: "Somdach Chhounath Hall" },
        { id: 3, name: "Somdach Chhounath Hall" },
        { id: 4, name: "Somdach Chhounath Hall" },
        { id: 5, name: "Somdach Chhounath Hall" },
        { id: 6, name: "Somdach Chhounath Hall" },
        { id: 7, name: "Somdach Chhounath Hall" },
        { id: 8, name: "Somdach Chhounath Hall" },
        { id: 9, name: "Somdach Chhounath Hall" },
        { id: 10, name: "Somdach Chhounath Hall" },
      ],
    },
    {
      id: 2,
      name: "2nd Floor",
      rooms: [
        { id: 1, name: "Room 201" },
        { id: 2, name: "Room 202" },
        { id: 3, name: "Room 203" },
        { id: 4, name: "Room 204" },
        { id: 5, name: "Room 205" },
        { id: 6, name: "Room 206" },
        { id: 7, name: "Room 207" },
        { id: 8, name: "Room 208" },
        { id: 9, name: "Room 209" },
        { id: 10, name: "Room 210" },
      ],
    },
    {
      id: 3,
      name: "3rd Floor",
      rooms: [
        { id: 1, name: "Room 301" },
        { id: 2, name: "Room 302" },
        { id: 3, name: "Room 303" },
        { id: 4, name: "Room 304" },
        { id: 5, name: "Room 305" },
        { id: 6, name: "Room 306" },
        { id: 7, name: "Room 307" },
        { id: 8, name: "Room 308" },
        { id: 9, name: "Room 309" },
        { id: 10, name: "Room 310" },
      ],
    },
    {
      id: 4,
      name: "4th Floor",
      rooms: [
        { id: 1, name: "Room 401" },
        { id: 2, name: "Room 402" },
        { id: 3, name: "Room 403" },
        { id: 4, name: "Room 404" },
        { id: 5, name: "Room 405" },
        { id: 6, name: "Room 406" },
        { id: 7, name: "Room 407" },
        { id: 8, name: "Room 408" },
        { id: 9, name: "Room 409" },
        { id: 10, name: "Room 410" },
      ],
    },
    {
      id: 5,
      name: "5th Floor",
      rooms: [
        { id: 1, name: "Room 501" },
        { id: 2, name: "Room 502" },
        { id: 3, name: "Room 503" },
        { id: 4, name: "Room 504" },
        { id: 5, name: "Room 505" },
        { id: 6, name: "Room 506" },
        { id: 7, name: "Room 507" },
        { id: 8, name: "Room 508" },
        { id: 9, name: "Room 509" },
        { id: 10, name: "Room 510" },
      ],
    },
    {
      id: 6,
      name: "6th Floor",
      rooms: [
        { id: 1, name: "Room 601" },
        { id: 2, name: "Room 602" },
        { id: 3, name: "Room 603" },
        { id: 4, name: "Room 604" },
        { id: 5, name: "Room 605" },
        { id: 6, name: "Room 606" },
        { id: 7, name: "Room 607" },
        { id: 8, name: "Room 608" },
        { id: 9, name: "Room 609" },
        { id: 10, name: "Room 610" },
      ],
    },
  ];

  return (
    <div className="h-full">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold my-8">ToulKork Campus</h1>
        <SearchBox />
      </div>
      <div className="w-full h-3/4 rounded-xl flex overflow-hidden shadow-md bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
        <div className="w-52 flex flex-col font-medium text-lg ">
          <h1 className="text-center mt-8 mb-10">Floor Map</h1>
          <div className="flex-1 flex flex-col overflow-y-auto no-scrollbar gap-2">
            {floorAndRoomData.map((floor) => (
              <div className="text-center hover:bg-blue-900 py-2 rounded-r-xl hover:shadow-sm">
                {floor.name}
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
          <div className=" flex-1 p-10">
            <div className="w-full h-full bg-white rounded-2xl"></div>
          </div>
          <div className="flex-1 columns-2 gap-4 pt-10 font-light text-xl pr-6">
            {floorAndRoomData[0]?.rooms?.map((room, index) => (
              <div className="p-4 flex gap-2">
                <span>{index + 1}.</span>
                <span>{room?.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomNavigationPage;
