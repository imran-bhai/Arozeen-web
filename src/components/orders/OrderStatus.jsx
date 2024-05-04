"use client";
import React, { useState } from "react";
import Image from "next/image";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { Button } from "../ui/button";
import ShippingCart from "./ShippingCart";
import CheckOrder from "./CheckOrder";

const OrderStatus = () => {
  const [active, setActive] = useState(0);
  return (
    <MaxWidthWrapper>
      <div>
        <div className="flex justify-center py-7 gap-x-8">
          <div className="cursor-pointer" onClick={() => setActive(0)}>
            <div className="flex items-center gap-x-2">
              <Image
                src="/SVGs/Order/check.svg"
                alt="check emoji"
                width={20}
                height={20}
                className="object-cover"
              />
              <h3 className="text-[#00B517]">Shipping cart</h3>
            </div>
            {active == 0 ? (
              <hr className="mt-3 bg-[#00B517] h-0.5" />
            ) : (
              <hr className="mt-3 h-0.5" />
            )}
          </div>

          <div className="cursor-pointer" onClick={() => setActive(1)}>
            <div className="flex items-center gap-x-2">
              <div className="h-5 w-5 rounded-full bg-[#214A25] flex justify-center items-center text-secondary text-xs">
                2
              </div>
              <h3 className="text-[#214A25]">Checkout Details</h3>{" "}
            </div>
            {active == 1 ? (
              <hr className="mt-3 bg-[#214A25] h-0.5" />
            ) : (
              <hr className="mt-3 h-0.5" />
            )}
          </div>

          <div className="cursor-pointer" onClick={() => setActive(2)}>
            <div className="flex items-center gap-x-2">
              <div className="h-5 w-5 rounded-full bg-[#B1B5C3] flex justify-center items-center text-secondary text-xs">
                3
              </div>
              <h3 className="text-[#B1B5C3] ">Order Complete</h3>{" "}
            </div>
            {active == 2 ? (
              <hr className="mt-3 bg-[#B1B5C3] h-0.5" />
            ) : (
              <hr className="mt-3 h-0.5" />
            )}
          </div>
        </div>
      </div>

     

      <ShippingCart />
      <CheckOrder />
    </MaxWidthWrapper>
  );
};

export default OrderStatus;
