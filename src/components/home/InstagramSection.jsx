import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import img1 from "../../../public/home/Instragram/img1.png";
import img2 from "../../../public/home/Instragram/img2.png";
import img3 from "../../../public/home/Instragram/img3.png";
import img4 from "../../../public/home/Instragram/img4.png";
import Image from "next/image";

const InstaImages = [img1, img2, img3, img4];

const InstagramSection = () => {
  return (
    <div className="flex justify-center items-center">
    <MaxWidthWrapper>
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-semibold text-2xl">Instragram</h2>
        <h3 className="text-gray-700 font-normal text-md py-2">
          Follow us on social media for more discount & promotions
        </h3>
        <h4 className="text-primary pb-3 font-semibold py-2">@Arozeen_official</h4>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            {
                InstaImages.map((img, index)=>
                <div className="mx-auto sm:py-5 lg:py-0" key={index}>
                    <Image src={img} alt={img+index} width={260} height={26}
                    className="object-fill" />
                </div>
            )
            }
        </div>
      </div>
    </MaxWidthWrapper>
    </div>
  );
};

export default InstagramSection;
