
import { notFound } from "next/navigation";
import { Suspense } from "react";
import axios from "axios";
import { Gallery } from "@/components/product/Gallery";
import { ProductDescription } from "@/components/product/ProductDescription";
import { API_BASE_URL } from "@/app/config/constants";
import RelatedProducts from "@/components/product/RelatedProducts";
import CustomerReviews from "@/components/product/CustomerReviews";
import DescriptionReviews from "@/components/product/DescriptionReviews";
import BreadcrumbCustome from "@/components/BreadcrumbCustome";


export default async function ProductPage({ params }) {
  const productId = params.product;

  let product;
  let ImagesUrl;

  try {
    const response = await axios.get(`${API_BASE_URL}products/${productId}`);
    product = response.data.data;

    const extractedImages = product.images.map(
      (obj) => process.env.NEXT_PUBLIC_IMAGE_BASE_URL + obj.image
    );
    ImagesUrl = extractedImages;
  } catch (error) {
    console.log(error);
  }

  if (!product) return notFound();
  return (
    <>
      <div className="mx-auto max-w-screen-2xl px-4 font-tec">
        <div className="py-3">
        <BreadcrumbCustome />
        </div>
        <div className="flex flex-col rounded-lg border border-neutral-200 bg-white  dark:border-neutral-800 dark:bg-black md:p-12 lg:flex-row lg:gap-10">
          <div className="h-full w-full basis-full lg:basis-4/6">
            <Gallery
              images={ImagesUrl.map((image) => ({
                src: image,
                altText: product.name,
              }))}
            />
          </div>

          <div className="basis-full lg:basis-3/6">
            <ProductDescription product={product} productId={productId} />
          </div>
        </div>

        <DescriptionReviews product={product} />
        <div className="">
          <CustomerReviews />
        </div>
        <Suspense>
          <RelatedProducts id={productId} heading="You Might Also Like" />
        </Suspense>
      </div>
    </>
  );
}
