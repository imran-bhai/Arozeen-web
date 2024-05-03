"use client";
import React, { createContext, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider-style.css";
import Image from "next/image";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import img1 from "../../public/home/heroSlider/img1.jpg";
import img2 from "../../public/home/heroSlider/img2.jpg";
import img3 from "../../public/home/heroSlider/img6.jpg";
import img4 from "../../public/home/heroSlider/Slider.svg";

import { set } from "lodash";

const slides = [img1, img2, img3, img4];

const Slider = () => {
  const [swiper, setSwiper] = useState(null);
  // const [isHovered, setIsHovered] = useState(false);

  const handleNextImage = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const handlePrevImage = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  return (
    <>
      <div
        className="relative min-w-full"
        //  onMouseEnter={() => setIsHovered(true)}
        //  onMouseLeave={() => setIsHovered(false)}
      >
        <Swiper
          loop={true}
          slidesPerView={"auto"}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            // disableOnInteraction: false,
            // pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          onSwiper={(swiper) => setSwiper(swiper)}
          modules={[Autoplay, Pagination, Navigation]}
          className="h-[30vh] sm:h-[70vh] md:h-[40vh] lg:h-[83vh]"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="">
              <div className="font-tec relative h-72 sm:h-[500px]">
                <div
                  className={`w-full min-h-screen h-[50vh] sm:h-[95vh] justify-center items-center cursor-pointer duration-500 flex flex-col lg:flex-row `}
                >
                  <div className="absolute top-0 left-0 right-0 flex justify-between items-center h-full">
                    <div
                      onClick={handlePrevImage}
                      className="flex justify-center items-center bg-gray-100 h-7 sm:h-12 w-7 sm:w-12 rounded-full ml-4 cursor-pointer"
                    >
                      <ArrowLeft />
                    </div>
                    <div
                      onClick={handleNextImage}
                      className="flex justify-center items-center bg-gray-100 h-7 sm:h-12 w-7 sm:w-12 rounded-full mr-4 cursor-pointer"
                    >
                      <ArrowRight />
                    </div>
                  </div>
                  <div className="h-full">
                    <Image
                      src={slide}
                      alt={slide}
                      priority={true}
                      className=" min-w-screen  object-contain"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
