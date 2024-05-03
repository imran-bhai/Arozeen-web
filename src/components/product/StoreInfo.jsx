import Image from "next/image";
import React from "react";

const StoreInfo = ({product}) => {

 

  return (
    <div className="w-full  border border-primary mt-5">
      <div className="flex justify-between items-center bg-[#FFF5EF] border border-b-primary px-2 ">
        <div className="flex gap-x-2 lg:py-2">
          <div className="rounded-full">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${product.images[0].image}`}
              width={50}
              height={50}
              className="object-cover rounded-full h-12 w-12 pt-1 "
            />
          </div>
          <div className="">
            <p className="text-gray-700">Sold By</p>
            <h3 className="font-semibold text-xl">Abdul Rehman</h3>
          </div>
        </div>
        <div className="text-primary font-semibold">
          <p className="text-sm">Chat with Seller</p>
        </div>
      </div>
      <div className="flex bg-[#FFF5EF]  h-32 ">
        <div className="flex-1 flex flex-col justify-center border border-r-primary border-b-primary">
          <h5 className="flex justify-center items-center">Seller Rating</h5>
          <h5 className="flex justify-center items-center text-3xl font-semibold">
            80%
          </h5>
        </div>
        <div className="flex-1 flex flex-col justify-center border border-b-primary">
          <h5 className="flex justify-center items-center">Ship on Time</h5>
          <h5 className="flex justify-center items-center text-3xl font-semibold">
            88%
          </h5>
        </div>
      </div>
      <div className="h-12 text-primary text-2xl flex justify-center items-center font-semibold">
        VIEW STORE
      </div>
    </div>
  );
};

export default StoreInfo;