import React, { useState, useEffect } from "react";

const Carousel = ({ data, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const autoplay = setInterval(() => {
      nextSlide();
    }, interval);
    return () => clearInterval(autoplay);
  }, [currentIndex, interval]);

  const nextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      const isLastSlide = currentIndex === data.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
      setIsTransitioning(false);
    }, 500); // Adjust the duration to match your transition duration
  };

  const goToSlide = (index) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 500); // Adjust the duration to match your transition duration
  };

  return (
    <div className="h-full col-span-2 relative rounded-2xl shadow-[rgba(0,_0,_0,_0.24)_0px_10px_8px]">
      <div className="relative h-full overflow-hidden rounded-2xl border-2">
        <div
          className={`absolute inset-0 flex transition-opacity duration-500 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {data.map((item, index) => (
            <div key={index} className="min-w-full flex-shrink-0 relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-8/12 h-full float-end object-cover opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 pl-8 bg-gradient-to-r from-blue-900 from-10% via-blue-800 via-40% to-transparent to-90% flex items-center p-4 opacity-100 transition-opacity">
                <div
                  className={`text-white text-xl leading-relaxed poppins-regular w-6/12 transition-all duration-1000 line-clamp-3 ${
                    isTransitioning
                      ? "opacity-0 translate-y-2"
                      : "opacity-100 translate-y-0"
                  }`}
                >
                  {item.title}
                </div>
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
            className={`cursor-pointer w-3 h-3 rounded-full border ${
              currentIndex === index
                ? "bg-white border-blue-900"
                : "bg-blue-900 border-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
