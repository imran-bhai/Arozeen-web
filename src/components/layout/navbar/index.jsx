"use client";
import Cart from "@/components/cart";
import OpenCart from "@/components/cart/OpenCart";
import Link from "next/link";
import { Suspense } from "react";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import Search from "@/components/layout/navbar/search";
import { ProfileDropDown } from "./ProfileDropDown";
import { usePathname } from "next/navigation";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Navbar() {
  const pathname = usePathname();
  

  return (
    <nav className="relative  mt-2 mb-1 lg:px-6">
      <MaxWidthWrapper className="flex justify-between">
        <div className="block flex-none md:hidden">
          <MobileMenu />
        </div>
        <div className="w-full  flex justify-between items-center">
          <Link
            href="/"
            className=" mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
          >
            <h1 className="text-primary text-2xl font-semibold">Arozeen</h1>
          </Link>
          <ul className="hidden gap-5 text-sm md:flex md:items-center">
            <Link
              href="/"
              className={`text-neutral-600 text-[1rem] font-semibold underline-offset-4 hover:text-orange-600  hover:underline dark:text-neutral-400 dark:hover:text-neutral ${
                pathname === "/" ? "underline text-orange-600" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/products"
              className={`text-neutral-600 text-[1rem] font-semibold underline-offset-4 hover:text-orange-600  hover:underline dark:text-neutral-400 dark:hover:text-neutral ${
                pathname === "/products" ? "underline text-orange-600" : ""
              }`}
            >
              Products
            </Link>


            {/* <Link
              href="/shop"
              className={`text-neutral-600 text-[1rem] font-semibold underline-offset-4 hover:text-orange-600  hover:underline dark:text-neutral-400 dark:hover:text-neutral ${
                pathname === "/shop" ? "underline text-orange-600" : ""
              }`}
            >
              Shop
            </Link>


            <Link
              href="/orders"
              className={`text-neutral-600 text-[1rem] font-semibold underline-offset-4 hover:text-orange-600  hover:underline dark:text-neutral-400 dark:hover:text-neutral ${
                pathname === "/orders" ? "underline text-orange-600" : ""
              }`}
            >
              Orders
            </Link> */}

            <Link
              href="/contact-us"
              className={`text-neutral-600 text-[1rem] font-semibold underline-offset-4 hover:text-orange-600  hover:underline dark:text-neutral-400 dark:hover:text-neutral ${
                pathname === "/contact-us" ? "underline text-orange-600" : ""
              }`}
            >
              Contact Us
            </Link>
          </ul>

          <div className="flex justify-end gap-x-2 ">
            <div className="hidden sm:block">
              <Search />
            </div>
            <div className="">
              <Suspense fallback={<OpenCart />}>
                <Cart />
              </Suspense>
            </div>
            <div className="hidden sm:block">
              <Suspense>
                <ProfileDropDown />
              </Suspense>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}
