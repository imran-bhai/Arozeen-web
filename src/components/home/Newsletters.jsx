"use client";
import Image from "next/image";
import React, { useState } from "react";
import BackgroundImg from "../../../public/home/newsletters/background.png";
import EmailIcon from "../../../public/home/newsletters/email-Icon.png";
import { Input } from "../ui/input";

const Newsletters = () => {
  const [email, setEmail] = useState();
  return (
    <div className="min-w-full  relative">
      <Image
        src={BackgroundImg}
        alt="Newsletter"
        priority={true}
        className="object-fit min-w-full h-60"
      />
      <div className="absolute flex flex-col justify-center items-center top-[40%] sm:top-[50%] md:top-[40%]  md:left-[30%] lg:left-[40%] left-[10%] mx-auto sm:left-[35%]">
        <h3 className="text-secondary text-xl sm:text-2xl font-bold ">
          Join Our Newsletter
        </h3>
        <h5 className="text-secondary text-sm sm:text-md">
          Sign up for deals, new products and promotions
        </h5>
        <div className="flex flex-col py-4 w-full">
          <div className="relative mt-1 ">
            <Image
              src={EmailIcon}
              alt="Email Icon"
              width={20}
              height={20}
              className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-400"
            />
            <h6
            onClick={() => console.log("clicked")}
             className="absolute cursor-pointer right-3 top-[10px] text-sm text-primary ">Send</h6>

            <Input
              className="pl-10 border-0  border-b-[1px] border-gray-800  focus:border-0 rounded-none focus:rounded
           placeholder:text-secondary bg-black mb-1 text-secondary"
              id="email"
              placeholder="Enter your email"
              type="email"
              maxlength="30"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              
            />
            {/* {errors.email && (
              <p className="text-red-500 text-xs ">{errors.email}</p>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletters;
