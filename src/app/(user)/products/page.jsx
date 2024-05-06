"use client";
import React, { useState, useEffect, Suspense } from "react";
import axios from "axios";
import { API_BASE_URL } from "@/app/config/constants";

import dynamic from "next/dynamic";

// dynamic imports 
const Promotions = dynamic(() => import('@/components/shop/Promotions'), { ssr: false })
const ShopCollectionInShop = dynamic(() => import('@/components/shop/ShopCollectionInShop'), { ssr: false })
const Banner = dynamic(() => import('@/components/product/ProductsBanner'), { ssr: false })
const ShopFilterProducts = dynamic(() => import('@/components/product/ShopFilterProducts'), { ssr: false })


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
    <div className="min-h-screen">
      <Banner />
      <ShopFilterProducts />
      <Promotions />
      <ShopCollectionInShop />
    </div>
  );
};

export default Products;
