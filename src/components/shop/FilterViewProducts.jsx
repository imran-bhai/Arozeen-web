"use client";
import { Fragment, useState, useEffect } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import ProductCart from "../cart/ProductCart";
import { API_BASE_URL } from "@/app/config/constants";
import axios from "axios";
import Image from "next/image";
import { SkeletonCard } from "../SkeletonCard";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];
const subCategories = [
  { name: "Kitchen", href: "#" },
  { name: "Living Room", href: "#" },
  { name: "Bedroom", href: "#" },
  { name: "Bathroom", href: "#" },
  { name: "Dinning", href: "#" },
  { name: "Chairs", href: "#" },
  { name: "Outdoor", href: "#" },
  { name: "Indoor", href: "#" },
];

const prices = [
  { name: "All Prices", href: "#" },
  { name: "PKR 0.00 - 990.99", href: "#" },
  { name: "PKR 1000.00 - 1990.99", href: "#" },
  { name: "PKR 2000.00 - 2990.99", href: "#" },
  { name: "PKR 3000.00 - 4990.99", href: "#" },
  { name: "PKR 50000.00+ ", href: "#" },
];

const FilterViewProducts = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        setIsLoading(true);

        const response = await axios.get(`${API_BASE_URL}view-all-products`);

        setProducts(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setError("Failed to fetch data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="">
      <div className="bg-white">
        <div>
          {/* Mobile filter dialog */}
          <Transition.Root show={mobileFiltersOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-40 lg:hidden"
              onClose={setMobileFiltersOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 z-40 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                    <div className="flex items-center justify-between px-4">
                      <h2 className="text-lg font-medium text-gray-900">
                        Filters
                      </h2>
                      <button
                        type="button"
                        className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                        onClick={() => setMobileFiltersOpen(false)}
                      >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>

                    {/* Filters */}
                    <form className="mt-4 border-t border-gray-200">
                      <ul
                        role="list"
                        className="px-2 py-3 font-medium text-gray-900"
                      >
                        {subCategories.map((category) => (
                          <li key={category.name}>
                            <a href={category.href} className="block px-2 py-1">
                              {category.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>

          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24"></div>

            <section
              aria-labelledby="products-heading"
              className="flex justify-center pb-24 pt-6"
            >
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              {/* Filters */}

              <h3 className="sr-only">Categories</h3>
              <ul
                role="list"
                className="hidden lg:block basis-2/12 space-y-1 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
              >
                <h3 className="text-primary font-semibold text-xl py flex gap-x-2">
                  <Image
                    src="/SVGs/filterIcon.svg"
                    alt="Filter Icon"
                    width={15}
                    height={15}
                  />{" "}
                  Filters
                </h3>
                <h3 className="text-bold text-md py-1 cursor-pointer">
                  CATEGORIES
                </h3>
                {subCategories.map((category) => (
                  <li key={category.name}>
                    <Link
                      className="text-gray-600 hover:underline hover:font-semibold hover:text-primary"
                      href={category.href}
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
                <br />
                <h3 className="cursor-pointer text-bold text-md py-1 ">
                  PRICE
                </h3>
                {prices.map((price) => (
                  <li key={price.name}>
                    <Link
                      className="text-gray-600 hover:underline hover:font-semibold hover:text-primary"
                      href={price.href}
                    >
                      {price.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Product grid */}
              <div className="basis-10/12">
                <div className="flex justify-between ">
                  <h3 className="text-primary text-xl font-semibold">
                    Leaving Room
                  </h3>
                  <div className="flex items-center">
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                          Sort
                          <ChevronDownIcon
                            className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            {sortOptions.map((option) => (
                              <Menu.Item key={option.name}>
                                {({ active }) => (
                                  <a
                                    href={option.href}
                                    className={classNames(
                                      option.current
                                        ? "font-medium text-gray-900"
                                        : "text-gray-500",
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    {option.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>

                    <button
                      type="button"
                      className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
                    >
                      <span className="sr-only">View grid</span>
                      <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                      onClick={() => setMobileFiltersOpen(true)}
                    >
                      <span className="sr-only">Filters</span>
                      <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>

                {isLoading ? (
                  <SkeletonCard lenght={8} grid={4} />
                ) : error ? (
                  <div>Error: {error}</div>
                ) : (
                  <ProductCart
                    products={products}
                    className="my-7 font-tec grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4"
                  />
                )}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default FilterViewProducts;