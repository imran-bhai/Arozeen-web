import dynamic from "next/dynamic";

const ArozeenProvides = dynamic(
  () => import("@/components/home/ArozeenProvides"),
  {
    ssr: false,
  }
);

const ExploreModernProduct = dynamic(
  () => import("@/components/home/ExploreModernProduct"),
  {
    ssr: false,
  }
);

const FeaturedProductSlider = dynamic(
  () => import("@/components/home/FeaturedProductSlider"),
  {
    ssr: false,
  }
);

const HeroSection = dynamic(() => import("@/components/home/HeroSection"), {
  ssr: false,
});

const HunderedsLowerPrices = dynamic(
  () => import("@/components/home/HunderedsLowerPrices"),
  {
    ssr: false,
  }
);

const InstagramSection = dynamic(
  () => import("@/components/home/InstagramSection"),
  {
    ssr: false,
  }
);

const LatestArticle = dynamic(() => import("@/components/home/LatestArticle"), {
  ssr: false,
});

const Newsletters = dynamic(() => import("@/components/home/Newsletters"), {
  ssr: false,
});

const ProductsHome = dynamic(() => import("@/components/home/ProductsHome"), {
  ssr: false,
});

const ShopCategories = dynamic(
  () => import("@/components/home/ShopCategories"),
  {
    ssr: false,
  }
);

const WinterCollection = dynamic(
  () => import("@/components/home/WinterCollection"),
  { ssr: false }
);

export default function Home() {
  return (
    <div>
      <div className="">
        <HeroSection />
      </div>
      <ExploreModernProduct />
      <FeaturedProductSlider />
      <ShopCategories />
      {/* <ShopCollection /> */}
      <ProductsHome />
      <HunderedsLowerPrices />
      <LatestArticle />
      <WinterCollection />
      <InstagramSection />
      <ArozeenProvides />
      <Newsletters />
    </div>
  );
}
