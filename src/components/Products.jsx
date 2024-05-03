"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { API_BASE_URL } from "@/app/config/constants";
import { Button } from "./ui/button";
import ProductCart from "./cart/ProductCart";
import ProductCartSkeleton from "./ProductCartSkeleton";

function extractFirstThreeWords(text) {
  const words = text
    .replace(/[^\w\s]|_/g, "")
    .split(/\s+/)
    .slice(0, 3)
    .join(" ");
  return words;
}

const Products = () => {
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

  return (
    <>
      {isLoading ? (
        <div className="mt-12">
          <ProductCartSkeleton />
        </div>
      ) : (
        <div className="my-12">
          <ProductCart products={products} className="my-7  font-tec grid grid-cols-1 md:grid-cols-3  xl:grid-cols-5 gap-4"/>
        </div>
      )}
    </>
  );
};

export default Products;
