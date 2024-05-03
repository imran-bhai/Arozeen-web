import Image from "next/image";
import React from "react";
import StarRating from "./StarRating";
import { ThumbsUp } from "lucide-react";
import DropDownIcon from "../iconSVG/DropDownIcon";
import LineChart from "./LineChart";
import MaxWidthWrapper from "../MaxWidthWrapper";

const CustomerReviews = () => {
  return (
    <MaxWidthWrapper>
      <div className="w-full">
        <div className="md:flex  md:justify-between ">
          <h3 className="text-3xl font-semibold text-black py-5">
            Customer Reivews (34)
          </h3>
          <div className="flex items-center text-[#214A25] gap-x-2">
            <p className="">Sort by: Newest </p>
            <div>
              <DropDownIcon className="#214A25" />
            </div>
          </div>
        </div>
        <div className="md:flex md:justify-center  lg:gap-x-24 ">
          <div className="flex-1">
            <div className="flex flex-col py-3">
              <div className="flex-1">
                <div className="flex gap-x-2">
                  <div className="w-96">
                    <Image
                      src="/home/categories/bombers.png"
                      width={50}
                      height={50}
                      className="object-cover rounded-full  "
                    />
                  </div>
                  <div className="mx-auto">
                    <p className="text-gray-700">Sold By</p>
                    <h3 className="font-semibold text-xl">Abdul Rehman</h3>
                    <StarRating rating={5} className="py-1" />
                    <p className="text-gray-700 py-3">
                      This shirt is a garment for the upper body, usually made
                      of lightweight cloth like cotton, and has a collar,
                      sleeves, and a front opening. Shirts can be long- or short
                      -sleeved, and can have buttons or snaps down the front. In
                      American English, the term shirt can refer to a wide
                      variety of upper-body garments and undergarments, hile in
                      British English, it&apos;s more specifically a garment with a
                      collar, sleeves with cuffs, and a full vertical opening.
                    </p>
                    <div className="text-[#214A25] flex items-center py-3 gap-x-2">
                      <ThumbsUp className="text-primary" />
                      <p className="">12 Person Liked</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1"></div>
            </div>

            <div className="flex flex-col py-3">
              <div className="flex-1">
                <div className="flex gap-x-2">
                  <div className="w-96">
                    <Image
                      src="/home/categories/bombers.png"
                      width={50}
                      height={50}
                      className="object-cover rounded-full  "
                    />
                  </div>
                  <div className="mx-auto">
                    <p className="text-gray-700">Sold By</p>
                    <h3 className="font-semibold text-xl">Abdul Rehman</h3>
                    <StarRating rating={5} className="py-1" />
                    <p className="text-gray-700 py-3">
                      This shirt is a garment for the upper body, usually made
                      of lightweight cloth like cotton, and has a collar,
                      sleeves, and a front opening. Shirts can be long- or short
                      -sleeved, and can have buttons or snaps down the front. In
                      American English, the term shirt can refer to a wide
                      variety of upper-body garments and undergarments, hile in
                      British English, its more specifically a garment with a
                      collar, sleeves with cuffs, and a full vertical opening.
                    </p>
                    <div className="text-[#214A25] flex items-center py-3 gap-x-2">
                      <ThumbsUp className="text-primary" />
                      <p className="">12 Person Liked</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1"></div>
            </div>
            <div className="flex flex-col py-3">
              <div className="flex-1">
                <div className="flex gap-x-2">
                  <div className="w-96">
                    <Image
                      src="/home/categories/bombers.png"
                      width={50}
                      height={50}
                      className="object-cover rounded-full  "
                    />
                  </div>
                  <div className="mx-auto">
                    <p className="text-gray-700">Sold By</p>
                    <h3 className="font-semibold text-xl">Abdul Rehman</h3>
                    <StarRating rating={5} className="py-1" />
                    <p className="text-gray-700 py-3">
                      This shirt is a garment for the upper body, usually made
                      of lightweight cloth like cotton, and has a collar,
                      sleeves, and a front opening. Shirts can be long- or short
                      -sleeved, and can have buttons or snaps down the front. In
                      American English, the term shirt can refer to a wide
                      variety of upper-body garments and undergarments, hile in
                      British English, its more specifically a garment with a
                      collar, sleeves with cuffs, and a full vertical opening.
                    </p>
                    <div className="text-[#214A25] flex items-center py-3 gap-x-2">
                      <ThumbsUp className="text-primary" />
                      <p className="">12 Person Liked</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1"></div>
            </div>
            <div className="text-center text-[#214A25] underline underline-offset-3">
              <p className="">View More</p>
            </div>
          </div>
          <div className="">
            <div className="flex-1 py-2 my-5 border border-primary">
              <div className="text-center">
                <h3 className="font-semibold text-2xl text-primary">
                  Overall Rating
                </h3>
                <p className="text-gray-700 py-3 mx-3">
                  Rating and reviews are verified and are from people who use
                  the service
                </p>
              </div>
              <div className="flex">
                <div className="flex-1 pl-12">
                  <p className="text-4xl sm:text-5xl font-bold">4.5</p>
                  <div className="py-3">
                    <StarRating rating={4} />
                  </div>

                  <p className="text-gray-700">12</p>
                </div>
                <div className="flex-1">
                  <LineChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default CustomerReviews;
