"use client";
import Image from "next/image";

import ColorSize from "./ColorSize";

import { Button } from "../ui/button";
import DropDownIcon from "../iconSVG/DropDownIcon";
import DropUpIcon from "../iconSVG/DropUpIcon";
import { AddToCart } from "../cart/AddToCart";
import HeartFilled from "../iconSVG/HeartFilled";
import { useState } from "react";
import HeartUnfilled from "../iconSVG/HeartUnfilled";


export function ProductDescription({ product, productId }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
       
        <div className="">
          <div className="lg:flex lg:justify-between ">
            <h1 className="mb-2 text-2xl sm:text-3xl lg:w-60 lg:text-xl font-medium text-center sm:text-start">
              {product.name}
            </h1>
            <div className="text-green-500 hidden md:block ">
              <div className="flex">
                <Image
                  src="/SVGs/productDetails/check.svg"
                  alt=""
                  width={23}
                  height={23}
                  className="object-contain"
                />
                <span className="ml-1">In Stock</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between mx-2 py-3">
            <div className="flex items-center gap-x-2">
              <div className="h-6 w-10 text-center font-semibold rounded-md bg-primary text-secondary">
                -50
              </div>
              <h5 className="text-sm py-2 text-[#C39378] line-through font-normal">
              {product.price_before}
              </h5>
              <h6 className="text-primary font-semibold">{product.price}</h6>
            </div>
            <div
              onClick={() => setIsFavorite(!isFavorite)}
              className="text-primary flex items-center gap-x-1 hover:cursor-pointer"
            >
              {isFavorite ? (
                <HeartFilled className="w-5 " />
              ) : (
                <HeartUnfilled className="w-5 " />
              )}

              <span className="">Save for later</span>
            </div>
          </div>
        </div>
        <div className="mx-3">
          <ColorSize />
        </div>

        <hr className="mx-3 " />
        <div className=" mx-3 py-3 text-md font-semibold text-gray-800 space-y-3 ">
          <div className="flex justify-between">
            <p className="py-5 ml-4 ">Quantity</p>
            <div className="flex items-center">
              <Button variant="outline" onClick={decrementQuantity}>
                <DropDownIcon />
              </Button>
              <p className="mx-4 text-primary font-semibold">{quantity}</p>
              <Button variant="outline" onClick={incrementQuantity}>
                <DropUpIcon />
              </Button>
            </div>
          </div>

          <AddToCart productId={productId} />
        </div>
      </div>
    </>
  );
}
