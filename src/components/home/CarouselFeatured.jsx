"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import { API_BASE_URL } from "@/app/config/constants";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import StarRating from "../product/StarRating";

export function CarouselFeatured() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartLoading, setIsCartLoading] = useState(true);
  



  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}view-all-products`);

        setCartItems(response.data.data); // Assuming the response contains cart items
        setIsCartLoading(false);
      } catch (error) {
        console.error("Error fetching cart items:", error);
        setIsCartLoading(false); // Ensure loading state is updated even if there's an error
      }
    };

    fetchCartItems();
  }, []);
  console.log("cart:", cartItems);
  function extractFirstThreeWords(text) {
    const words = text
      .replace(/[^\w\s]|_/g, "")
      .split(/\s+/)
      .slice(0, 3)
      .join(" ");
    return words;
  }

  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: true })
  );

  return (
    <Carousel
      opts={{ align: "start" }}
      plugins={[plugin.current]}
      className="min-w-full max-w-sm ease-in"
      onMouseEnter={() => plugin.current.stop()}
      onMouseLeave={() => plugin.current.play()}
    >
      <CarouselContent>
        {cartItems?.map((product, index) => (
          <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/5 ">
            <div className="">
              <CardContent className="flex aspect-square items-center justify-center ">
                <Link
                  key={index}
                  href={`/products/${product.id}`}
                  className="hover:scale-105"
                >
                  <div className=" relative flex flex-col justify-center items-center  lg:h-56 lg:w-52 h-56    bg-gray-200 ">
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
                      className="h-56 object-fit"
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
              </CardContent>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

// import * as React from "react";
// import Autoplay from "embla-carousel-autoplay";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from "@/components/ui/carousel";

// import { useState, useEffect } from "react";
// import { API_BASE_URL } from "@/app/config/constants";
// import axios from "axios";
// import Link from "next/link";
// import StarRating from "../product/StarRating";
// import Image from "next/image";
// import ProductCart from "../cart/ProductCart";

// export function CarouselFeatured() {
//   const [cartItems, setCartItems] = useState([]);
//   const [isCartLoading, setIsCartLoading] = useState(true);
//   const [newCartItems, setNewCartItems] = useState(false);

//   useEffect(() => {
//     const fetchCartItems = async () => {
//       try {
//         const response = await axios.get(
//           `${API_BASE_URL}view-all-products`
//         );

//         setCartItems(response.data.data); // Assuming the response contains cart items
//         setIsCartLoading(false);
//       } catch (error) {
//         console.error("Error fetching cart items:", error);
//         setIsCartLoading(false); // Ensure loading state is updated even if there's an error
//       }
//     };

//     fetchCartItems();
//   }, []);

//   const plugin = React.useRef(
//     Autoplay({ delay: 2000, stopOnInteraction: true })
//   );

//   function extractFirstThreeWords(text) {
//     const words = text
//       .replace(/[^\w\s]|_/g, "")
//       .split(/\s+/)
//       .slice(0, 3)
//       .join(" ");
//     return words;
//   }

//   return (
//     <Carousel
//       plugins={[plugin.current]}
//       className="w-full h-full sm:h-96 md:h-[680px] lg:h-96  cursor-pointer"
//       onMouseEnter={plugin.current.stop}
//       onMouseLeave={plugin.current.play}

//     >
//       <CarouselContent>
//       {cartItems?.map((product, index) => (
//         <CarouselItem>
//           <Link
//             key={index}
//             href={`/products/${product.id}`}
//             className="hover:scale-105"
//           >
//             <div className=" relative flex flex-col justify-center items-center  lg:h-56 w-auto h-56    bg-gray-200 ">
//               <div className="flex flex-row sm:flex-col">
//                 <span className="w-10 text-center absolute top-2 left-3 px-2 py-0.5 rounded-md  bg-secondary text-primary font-semibold text-xs ">
//                   NEW
//                 </span>
//                 <span className="w-10 text-center absolute top-8 left-3 px-2 py-0.5 rounded-md  bg-primary text-secondary font-semibold text-xs ">
//                   -50%
//                 </span>
//               </div>

//               <Image
//                 src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${product.image}`}
//                 alt=""
//                 width={300}
//                 height={400}
//                 className="h-56 w-full object-fit"
//               />
//             </div>
//             <div className="flex flex-col py-2 items-center sm:items-start">
//               <div className=" text-lg py-1 text-primary font-semibold  ">
//                 <StarRating rating={product.average_rating} />
//               </div>
//               <h3 className="text-base font-medium">
//                 {`${extractFirstThreeWords(product.name)}`}
//               </h3>
//               <div className="flex gap-x-2">
//                 <p className="text-sm py-2 text-primary font-semibold">
//                   {"$"}
//                   {`${product.price}`}
//                 </p>
//                 <p className="text-sm py-2 text-[#C39378] font-semibold line-through">
//                   {"$"}
//                   {`${product.before_price}`}
//                 </p>
//               </div>
//             </div>
//           </Link>
//           </CarouselItem>
//         ))}

//       </CarouselContent>
//     </Carousel>
//   );
// }
