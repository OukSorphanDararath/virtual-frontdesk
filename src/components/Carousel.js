import React, { useState, useEffect } from "react";

const Carousel = ({ data, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const autoplay = setInterval(() => {
      nextSlide();
    }, interval);
    return () => clearInterval(autoplay);
  }, [currentIndex, interval]);

  const nextSlide = () => {
    const isLastSlide = currentIndex === data.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="h-full col-span-2 relative rounded-2xl shadow-[rgba(0,_0,_0,_0.24)_0px_10px_8px]">
      <div className="relative h-full overflow-hidden rounded-2xl border-2">
        <div
          className="absolute inset-0 flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {data.map((item, index) => (
            <div key={index} className="min-w-full flex-shrink-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 text-center">
                {item?.title}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-3 right-3 flex flex-col space-y-2">
        {data.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`cursor-pointer w-3 h-3 rounded-full border border-blue-900 ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
