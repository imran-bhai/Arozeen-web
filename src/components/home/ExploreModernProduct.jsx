import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";

const ExploreModernProduct = () => {
  return (
    <MaxWidthWrapper>
      <div className="hidden px-6 mt-12 md:flex gap-3">
        <h4 className=" text-2xl  lg:text-4xl font-semibold">
          Explore Our{" "}
          <span className="text-green-900 "> Modern Product Collection</span>
        </h4>
        <div className=" flex justify-center items-center ">
          <p>
            <strong>Arozeen</strong> is a gift & a provider of e-commerce and
            technology infrastructure services.
          </p>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default ExploreModernProduct;
