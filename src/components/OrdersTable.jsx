"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import StarRating from "./product/StarRating";
import { useState, useRef } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

export default function OrderTable() {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [expand, setExpand] = useState();
  const [formID, setFormID] = useState();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    // Do whatever you want with the selected file
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  const handleReviewFormShow = (id) => {
    setFormID(id);
    setExpand(!expand);
  };
  return (
    <MaxWidthWrapper>
      <div className="bg-gray-50 p-6">
        {/* Order 1  */}

        <div className="">
          <div className="flex justify-between items-center">
            <div className="flex  md:space-x-6 py-5">
              <p className="">
                Order ID: <span className=" text-primary">#3243223</span>
              </p>
              <h4 className="text-[#00B420]">Placed On: 28 May 2024</h4>
            </div>
            <div className="">
              <div className="bg-secondary text-primary">Manage</div>
            </div>
          </div>

          <div
            id="order1"
            className="py-4 md:py-0 flex flex-col md:flex-row md:items-center md:justify-between md:space-x-6"
          >
            <div className="flex flex-row items-center space-x-4 mb-4 md:mb-0">
              <Image
                alt="Mens Black T-Shirt"
                className="w-16 h-20"
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
                <p className="text-sm text-gray-500">T-Shart</p>
              </div>
            </div>
            <div className="flex justify-between  md:gap-x-28 pb-4">
              <div className="text-[#214A25]">October 17, 2023</div>
              <div className="">
                <p>Quantity: 1</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="">
                <div className="flex  items-center justify-between md:space-x-2 ">
                  <Button className="bg-primary rounded-none">Completed</Button>
                  <Button
                    onClick={() => handleReviewFormShow(1)}
                    className="hover:bg-secondary whitespace-nowrap bg-[#F7EAE3] rounded-none text-primary"
                  >
                    Write a Review
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {expand && formID == 1 ? (
          <div id="" className="">
            <div className="mt-4 grid gap-6 md:grid-cols-3">
              <div className="bg-[#F7EAE3] py-2 flex flex-col  justify-center items-center">
                <h4 className="font-semibold text-md mb-2  text-[#214A25]">
                  Product Rating
                </h4>
                <div className="flex space-x-1">
                  <StarRating rating={5} />
                </div>
              </div>
              <div className="bg-[#F7EAE3] py-2 flex flex-col justify-center items-center">
                <h4 className="font-semibold text-md mb-2 text-[#214A25]">
                  Seller Rating
                </h4>
                <div className="flex space-x-1">
                  <StarRating rating={4} />
                </div>
              </div>
              <div className="bg-[#F7EAE3] py-2 flex flex-col justify-center items-center">
                <h4 className="font-semibold text-md mb-2 text-[#214A25]">
                  Delivery Rating
                </h4>
                <div className="flex space-x-1">
                  <StarRating rating={3} />
                </div>
              </div>
            </div>
            <div className=" mt-4     md:mt-4 md:ml-0 w-full ">
              <div className="md:flex">
                <input
                  ref={fileInputRef}
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <Button
                  onClick={handleButtonClick}
                  className="text-orange-500  w-full h-32 border-2 border-dashed border-orange-200"
                  variant="ghost"
                >
                  <CameraIcon className="text-gray-400 w-6 h-6 mr-2" />
                  Add Photo
                </Button>
                {selectedFile && (
                  <div className="mt-4">
                    <Image
                      src={URL.createObjectURL(selectedFile)}
                      alt="Selected"
                      className="max-w-xs"
                      layout="true"
                    />
                  </div>
                )}
                <Textarea
                  className="mt-4 md:mt-0 md:ml-6 w-full"
                  placeholder="Write your review here."
                />
              </div>
              <span className="flex justify-between md:justify-center md:gap-x-2 items-center mt-4 ">
                <div className="bg-[#F7EAE3]  py-2 px-3">
                  <Checkbox id="" />
                  <label
                    className="text-sm font-medium leading-none ml-2"
                    htmlFor="show-name"
                  >
                    Show user name
                  </label>
                </div>
                <div className="">
                  <Button className="ml-auto rounded-none px-12">Submit</Button>
                </div>
              </span>
            </div>
          </div>
        ) : (
          ""
        )}

        {/* Order 2  */}
        <div className="">
          <div className="flex justify-between items-center">
            <div className="flex  md:space-x-6 py-5">
              <p className="">
                Order ID: <span className=" text-primary">#3243223</span>
              </p>
              <h4 className="text-[#00B420]">Placed On: 28 May 2024</h4>
            </div>
            <div className="">
              <div className="bg-secondary text-primary">Manage</div>
            </div>
          </div>

          <div
            id="order2"
            className="py-4 md:py-0 flex flex-col md:flex-row md:items-center md:justify-between md:space-x-6"
          >
            <div className="flex flex-row items-center space-x-4 mb-4 md:mb-0">
              <Image
                alt="Mens Black T-Shirt"
                className="w-16 h-20"
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
                <p className="text-sm text-gray-500">T-Shart</p>
              </div>
            </div>
            <div className="flex justify-between  md:gap-x-28 pb-4">
              <div className="text-[#214A25]">October 17, 2023</div>
              <div className="">
                <p>Quantity: 1</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="">
                <div className="flex  items-center justify-between md:space-x-2 ">
                  <Button className="bg-primary rounded-none">Completed</Button>
                  <Button
                    onClick={() => handleReviewFormShow(2)}
                    className="hover:bg-secondary whitespace-nowrap bg-[#F7EAE3] rounded-none text-primary"
                  >
                    Write a Review
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {expand && formID == 2 ? (
          <div id="" className="">
            <div className="mt-4 grid gap-6 md:grid-cols-3">
              <div className="bg-[#F7EAE3] py-2 flex flex-col  justify-center items-center">
                <h4 className="font-semibold text-md mb-2  text-[#214A25]">
                  Product Rating
                </h4>
                <div className="flex space-x-1">
                  <StarRating rating={5} />
                </div>
              </div>
              <div className="bg-[#F7EAE3] py-2 flex flex-col justify-center items-center">
                <h4 className="font-semibold text-md mb-2 text-[#214A25]">
                  Seller Rating
                </h4>
                <div className="flex space-x-1">
                  <StarRating rating={4} />
                </div>
              </div>
              <div className="bg-[#F7EAE3] py-2 flex flex-col justify-center items-center">
                <h4 className="font-semibold text-md mb-2 text-[#214A25]">
                  Delivery Rating
                </h4>
                <div className="flex space-x-1">
                  <StarRating rating={3} />
                </div>
              </div>
            </div>
            <div className=" mt-4     md:mt-4 md:ml-0 w-full ">
              <div className="md:flex">
                <input
                  ref={fileInputRef}
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <Button
                  onClick={handleButtonClick}
                  className="text-orange-500  w-full h-32 border-2 border-dashed border-orange-200"
                  variant="ghost"
                >
                  <CameraIcon className="text-gray-400 w-6 h-6 mr-2" />
                  Add Photo
                </Button>
                {selectedFile && (
                  <div className="mt-4">
                    <Image
                      src={URL.createObjectURL(selectedFile)}
                      alt="Selected"
                      className="max-w-xs"
                    />
                  </div>
                )}
                <Textarea
                  className="mt-4 md:mt-0 md:ml-6 w-full"
                  placeholder="Write your review here."
                />
              </div>
              <span className="flex justify-between md:justify-center md:gap-x-2 items-center mt-4 ">
                <div className="bg-[#F7EAE3]  py-2 px-3">
                  <Checkbox id="" />
                  <label
                    className="text-sm font-medium leading-none ml-2"
                    htmlFor="show-name"
                  >
                    Show user name
                  </label>
                </div>
                <div className="">
                  <Button className="ml-auto rounded-none px-12">Submit</Button>
                </div>
              </span>
            </div>
          </div>
        ) : (
          ""
        )}
        {/* Order 3  */}
        <div className="">
          <div className="flex justify-between items-center">
            <div className="flex  md:space-x-6 py-5">
              <p className="">
                Order ID: <span className=" text-primary">#3243223</span>
              </p>
              <h4 className="text-[#00B420]">Placed On: 28 May 2024</h4>
            </div>
            <div className="">
              <div className="bg-secondary text-primary">Manage</div>
            </div>
          </div>

          <div
            id="order2"
            className="py-4 md:py-0 flex flex-col md:flex-row md:items-center md:justify-between md:space-x-6"
          >
            <div className="flex flex-row items-center space-x-4 mb-4 md:mb-0">
              <Image
                alt="Men's Black T-Shirt"
                className="w-16 h-20"
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
                <p className="text-sm text-gray-500">T-Shart</p>
              </div>
            </div>
            <div className="flex justify-between  md:gap-x-28 pb-4">
              <div className="text-[#214A25]">October 17, 2023</div>
              <div className="">
                <p>Quantity: 1</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="">
                <div className="flex  items-center justify-between md:space-x-2 ">
                  <Button className="bg-primary rounded-none ">
                    Completed
                  </Button>
                  <Button
                    onClick={() => handleReviewFormShow(3)}
                    className="hover:bg-secondary whitespace-nowrap bg-[#F7EAE3] rounded-none text-primary"
                  >
                    Write a Review
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {expand && formID == 3 ? (
          <div id="" className="">
            <div className="mt-4 grid gap-6 md:grid-cols-3">
              <div className="bg-[#F7EAE3] py-2 flex flex-col  justify-center items-center">
                <h4 className="font-semibold text-md mb-2  text-[#214A25]">
                  Product Rating
                </h4>
                <div className="flex space-x-1">
                  <StarRating rating={5} />
                </div>
              </div>
              <div className="bg-[#F7EAE3] py-2 flex flex-col justify-center items-center">
                <h4 className="font-semibold text-md mb-2 text-[#214A25]">
                  Seller Rating
                </h4>
                <div className="flex space-x-1">
                  <StarRating rating={4} />
                </div>
              </div>
              <div className="bg-[#F7EAE3] py-2 flex flex-col justify-center items-center">
                <h4 className="font-semibold text-md mb-2 text-[#214A25]">
                  Delivery Rating
                </h4>
                <div className="flex space-x-1">
                  <StarRating rating={3} />
                </div>
              </div>
            </div>
            <div className=" mt-4     md:mt-4 md:ml-0 w-full ">
              <div className="md:flex">
                <input
                  ref={fileInputRef}
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <Button
                  onClick={handleButtonClick}
                  className="text-orange-500  w-full h-32 border-2 border-dashed border-orange-200"
                  variant="ghost"
                >
                  <CameraIcon className="text-gray-400 w-6 h-6 mr-2" />
                  Add Photo
                </Button>
                {selectedFile && (
                  <div className="mt-4">
                    <Image
                      src={URL.createObjectURL(selectedFile)}
                      alt="Selected"
                      className="max-w-xs"
                      layout="true"
                    />
                  </div>
                )}
                <Textarea
                  className="mt-4 md:mt-0 md:ml-6 w-full"
                  placeholder="Write your review here."
                />
              </div>
              <span className="flex justify-between md:justify-center md:gap-x-2 items-center mt-4 ">
                <div className="bg-[#F7EAE3]  py-2 px-3">
                  <Checkbox id="" />
                  <label
                    className="text-sm font-medium leading-none ml-2"
                    htmlFor="show-name"
                  >
                    Show user name
                  </label>
                </div>
                <div className="">
                  <Button className="ml-auto rounded-none px-12">Submit</Button>
                </div>
              </span>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </MaxWidthWrapper>
  );
}

function CameraIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
