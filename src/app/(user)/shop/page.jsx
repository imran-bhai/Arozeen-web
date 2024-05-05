import ShopCollectionInShop from "@/components/shop/ShopCollectionInShop";
import React from "react";
import ShopBanner from "@/components/shop/ShopBanner";
import ShopCategories from "@/components/home/ShopCategories";
import ShopProductCart from "@/components/shop/ShopProductCart";

const page = () => {
  return (
    <div className="font-tec min-w-screen">
      <ShopBanner />
      <div className="pt-5">
        <ShopCategories />
      </div>
      <ShopProductCart />
      <ShopCollectionInShop />
    </div>
  );
};

export default page;
