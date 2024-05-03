import ArozeenProvides from "@/components/home/ArozeenProvides";
import ExploreModernProduct from "@/components/home/ExploreModernProduct";
import FeaturedProductSlider from "@/components/home/FeaturedProductSlider";
import HeroSection from "@/components/home/HeroSection";
import HunderedsLowerPrices from "@/components/home/HunderedsLowerPrices";
import InstagramSection from "@/components/home/InstagramSection";
import LatestArticle from "@/components/home/LatestArticle";
import Newsletters from "@/components/home/Newsletters";
import ProductsHome from "@/components/home/ProductsHome";
import ShopCategories from "@/components/home/ShopCategories";
import ShopCollection from "@/components/home/ShopCollection";
import WinterCollection from "@/components/home/WinterCollection";
import Products from "@/components/Products";

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
