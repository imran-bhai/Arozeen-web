import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'


const ShippingCart = () => {
  return (
    <>
    <div className="">
    <h3 className="text-start text-2xl">Men&apos;s Black T-Shirt</h3>
    <div className="flex justify-between items-center">
      <div className="flex  md:space-x-6 pb-4 ">
        <p className="">
          Order ID: <span className=" text-primary">#3243223</span>
        </p>
        <h4 className="text-[#00B420]">Placed On: 28 May 2024</h4>
      </div>
    </div>

    <div
      id="order1"
      className="bg-[#F3F5F7] py-4 md:py-0 flex flex-col md:flex-row md:items-center md:justify-between md:space-x-6"
    >
      <div className="flex flex-row items-center space-x-4 mb-4 md:mb-0">
        <Image
          alt="Mens Black T-Shirt"
          className="w-16 h-20 border border-primary"
          height="100"
          src="/home/categories/bombers.png"
          style={{
            aspectRatio: "80/100",
            objectFit: "cover",
          }}
          width="80"
        />
        <div className="">
          <h3 className="text-lg font-semibold">
            Men&apos;s Black T-Shirt
          </h3>
          <p className="text-sm text-gray-500 text-start">T-Shart</p>
        </div>
      </div>
      <div className="flex justify-between  md:gap-x-28 pb-4">
        <div className="text-[#214A25] text-primary">
          <span className="font-semibold text-gray-900">Rs:</span> 999
        </div>
        <div className="">
          <p className="text-primary">
            <span className="font-semibold text-gray-900">Quantity:</span> 1
          </p>
        </div>
      </div>
      <div className="space-y-2 text-sm">
        <div className="">
          <div className="flex  items-center justify-between md:space-x-2 ">
            <Button className="bg-red-400 text-red-700 rounded-none">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>

  

  
  </div>
    <div className="flex mt-8">
    <div className="basis-1/3 text-start">
      <h3 className="text-lg font-semibold">Delivery</h3>
      <h4 className="text-md text-gray-700">Address</h4>
      <p className="text-sm text-gray-500">
        #123, ABC Street, New York, NY 10001
      </p>
      <p className="text-sm text-gray-500">+92 325 6969288</p>
    </div>
    <div className="basis-1/3 text-start">
      <div className="">
        <h3 className="font-semibold">Payment</h3>
        <h5 className="">Cash on Delivery</h5>
      </div>
      <div className="">
        <h3 className="text-black">Need Help</h3>
        <h4 className="">Order issue</h4>
        <h4 className="">Delivery Info</h4>
        <h4 className="">Returns</h4>
      </div>
    </div>
    <div className="basis-1/3 text-start">
      <h3 className="text-lg font-semibold">Order Summary</h3>

      <div className="">
        <div className="flex justify-between">
          <h4 className="text-md text-gray-700 font-semibold">Subtotal</h4>
          <h5 className="">PKR 999.00</h5>
        </div>

        <div className="flex justify-between">
          <h4 className="text-md text-gray-700">Discount</h4>
          <h5 className="">{`(20%)PKR 120.00`}</h5>
        </div>
        <div className="flex justify-between">
          <h4 className="text-md text-gray-700">Delivery by Charges</h4>
          <h5 className="">0</h5>
        </div>

        <div className="flex justify-between">
          <h4 className="text-md text-gray-700">Text</h4>
          <h5 className="">PKR 60</h5>
        </div>

        <hr className="my-2 border border-gray-800 border-dotted" />

        <div className="flex justify-between">
          <h4 className="text-md text-gray-700">Total</h4>
          <h5 className="">PKR 1059.00</h5>
        </div>
      </div>
    </div>
  </div>

  </>
  )
}

export default ShippingCart
