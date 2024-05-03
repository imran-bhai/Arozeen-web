// components/Footer.js
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="bg-primary min-h-56  text-secondary flex flex-col items-center pt-5">
      <nav className="flex flex-col md:flex-row md:gap-96 md:py-7 justify-center items-center">
        <div className="flex justify-center items-center gap-5  ">
          <h1 className="text-2xl md:3xl font-medium sm:font-semibold ">
            Arozeen
          </h1>
          <div className="">|</div>
          <h2 className="text-xl">Store</h2>
        </div>
        <ul className="flex items-center justify-center flex-wrap space-x-4 py-5">
          <li>
            <a href="#" className="text-base hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-base hover:underline">
              Shop
            </a>
          </li>
          <li>
            <a href="#" className="text-base hover:underline">
              Product
            </a>
          </li>
          <li>
            <a href="#" className="text-base hover:underline">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="text-base hover:underline">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
      <hr className="mx-12 w-full bg-gray-700 " />
      <div className="flex flex-col md:flex-row md:items-center ">
        <div className="flex justify-between mt-5 md:mt-0 md:order-2 md:mx-24">
          <Link href="#" className="text-xs  hover:underline">
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs  hover:underline">
            Terms of Use
          </Link>
        </div>
        <div className="flex gap-x-3 justify-center py-5 md:order-3">
          <Image
            src="/SVGs/TopBar/facebook.svg"
            alt="facebook icon"
            width={20}
            height={20}
          />
          <Image
            src="/SVGs/TopBar/instagram.svg"
            alt="Instagram Icon"
            width={20}
            height={20}
          />
          <Image
            src="/SVGs/TopBar/pinterest.svg"
            alt="Pinterest Icon"
            width={20}
            height={20}
          />
          <Image
            src="/SVGs/TopBar/whatsapp.svg"
            alt="Whatsapp Icon"
            width={20}
            height={20}
          />
        </div>
        <p className="text-sm md:text-md py-2">
          © 2024 Arazeen, All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
