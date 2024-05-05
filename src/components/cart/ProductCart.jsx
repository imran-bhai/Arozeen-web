"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import StarRating from "../product/StarRating";


function extractFirstThreeWords(text) {
  const words = text
    .replace(/[^\w\s]|_/g, "")
    .split(/\s+/)
    .slice(0, 3)
    .join(" ");
  return words;
}
const ProductCart = ({ products,className }) => {
  return (
   
      <div className={className}>
        {products?.slice(0,10).map((product, index) => (
          <Link
            key={index}
            href={`/products/${product.id}`}
            className="hover:scale-105"
          >
            <div className=" relative flex flex-col justify-center items-center  lg:h-56 w-auto h-56    bg-gray-200 ">
              <div className="flex flex-row sm:flex-col">
                <span className="w-10 text-center absolute top-2 left-3 px-2 py-0.5 rounded-md  bg-secondary text-primary font-semibold text-xs ">
                  NEW
                </span>
                <span className="w-10 text-center absolute top-8 left-3 px-2 py-0.5 rounded-md  bg-primary text-secondary font-semibold text-xs ">
                  -50%
                </span>
              </div>

              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${product.image}`}
                alt=""
                width={300}
                height={400}
                className="h-56 w-full object-fit"
              />
            </div>
            <div className="flex flex-col py-2 items-center sm:items-start">
              <div className=" text-lg py-1 text-primary font-semibold  ">
                <StarRating rating={product.average_rating} />
              </div>
              <h3 className="text-base font-medium">
                {`${extractFirstThreeWords(product.name)}`}
              </h3>
              <div className="flex gap-x-2">
                <p className="text-sm py-2 text-primary font-semibold">
                  {"$"}
                  {`${product.price}`}
                </p>
                <p className="text-sm py-2 text-[#C39378] font-semibold line-through">
                  {"$"}
                  {`${product.before_price}`}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
   
  );
};

export default ProductCart;
