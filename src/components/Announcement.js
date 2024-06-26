import React, { useState, useEffect } from "react";
import Modal from "./Modal";

const Announcement = ({ data, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ image: "", title: "" });

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

  const openModal = (image, title) => {
    setModalContent({ image, title });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="h-full relative rounded-2xl shadow-[rgba(0,_0,_0,_0.24)_0px_10px_8px] col-span-1">
      <div className="relative h-full overflow-hidden rounded-2xl border-2">
        <div
          className={`absolute inset-0 flex transition-opacity duration-500 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="min-w-full flex-shrink-0 relative cursor-pointer"
              onClick={() => openModal(item.image, item.title)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
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
      {isModalOpen && (
        <Modal
          image={modalContent.image}
          title={modalContent.title}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Announcement;
