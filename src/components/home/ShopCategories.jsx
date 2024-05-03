import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Image from "next/image";
import bombers from "../../../public/home/categories/bombers.png";
import coats from "../../../public/home/categories/coats.png";
import gilets from "../../../public/home/categories/gilets.png";
import lightweight from "../../../public/home/categories/lightweight.png";
import puffers from "../../../public/home/categories/puffers.png";
import rainwear from "../../../public/home/categories/rainwear.png";

const categories = [
  { src: bombers, name: "Bombers" },
  { src: coats, name: "Coats" },
  { src: gilets, name: "Gilets" },
  { src: lightweight, name: "Lightweight" },
  { src: puffers, name: "Puffers" },
  { src: rainwear, name: "Rainwear" },
];

const ShopCategories = () => {
  return (
    <div className="">
      <MaxWidthWrapper className="flex flex-col  justify-center items-center md:items-center lg:items-start">
        <h3 className="text-primary font-semibold text-xl sm:text-3xl py-5 sm:py-0 ">
          Shop by Categories
        </h3>
        <div className="w-full h-64 grid grid-cols-3 md:grid-cols-6 md:gap-x-2">
          {categories.map((item, index) => {
            return (
              <div
                className="text-center flex flex-col justify-center items-center"
                key={index}
              >
                <Image
                  src={item.src}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="object-cover h-24 sm:h-24  w-24 sm:w-24 lg:h-32 lg:w-32  rounded-full"
                />
                <h3 className="py-2 font-semibold">{item.name}</h3>
              </div>
            );
          })}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ShopCategories;
