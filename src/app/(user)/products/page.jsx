"use client";
import React, { useState, useEffect, Suspense } from "react";
import axios from "axios";
import { API_BASE_URL } from "@/app/config/constants";
import FilterViewProducts from "@/components/shop/FilterViewProducts";
import Promotions from "@/components/shop/Promotions";
import ShopCollectionInShop from "@/components/shop/ShopCollectionInShop";
import Banner from "@/components/shop/Banner";

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
        <FilterViewProducts />
        <Promotions />
        <ShopCollectionInShop />
  
    </div>
  );
};

export default Products;
