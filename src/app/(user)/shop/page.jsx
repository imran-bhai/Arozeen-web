import React from "react";
import dynamic from "next/dynamic";

const ShopCollectionInShop = dynamic(
  () => import("@/components/shop/ShopCollectionInShop"),
  {
    ssr: false,
  }
);

const ShopBanner = dynamic(() => import("@/components/shop/ShopBanner"), {
  ssr: false,
});

const ShopCategories = dynamic(
  () => import("@/components/home/ShopCategories"),
  {
    ssr: false,
  }
);

const ShopProductCart = dynamic(
  () => import("@/components/shop/ShopProductCart"),
  {
    ssr: false,
  }
);

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
