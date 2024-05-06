import { getToken } from "@/app/config/actions";
import BreadcrumbCustome from "@/components/BreadcrumbCustome";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import OrderStatus from "@/components/orders/OrderStatus";
import { headers } from "next/headers";

const page = () => {
  const requestHeaders = headers();
  const referer = requestHeaders.get("referer");

  // Extract pathname from the referer if needed
  const pathname = new URL(referer).pathname;
  const endpoint = pathname.split("/").pop();

  console.log("slug:", endpoint);

 
  return (
    <MaxWidthWrapper>
      <div className="py-5">
        <BreadcrumbCustome />
        <div className="text-center">
          <h5 className="text-xl font-semibold text-gray-700">
            Thank You &#127881;
          </h5>
          <h4 className="text-2xl font-semibold leading-loose text-primary">
            Your Order is Processing
          </h4>
          <OrderStatus endpoint={endpoint}/>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default page;
