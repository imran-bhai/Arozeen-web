"use client";
import React, { useEffect, useState } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import ShippingCart from "./ShippingCart";
import { getToken } from "@/app/config/actions";
import axios from "axios";
import { usePathname } from "next/navigation";

const OrderStatus = () => {
 
  const pathname = usePathname();
  console.log("router:", pathname);
  const endpoint = pathname.split("/")[2];
  
 
  const [active, setActive] = useState(0);
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  const fetchOrders = async () => {
    try {
      const token = await getToken();
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}products-ordered/${endpoint}`,
        {
          headers: {
            Authorization: `Bearer ${token.tokenId}`,
          },
        }
      );
      setOrders(response.data);
      setIsLoading(false);
    } catch (err) {
      console.error("Error fetching orders:", err);
      // Handle the error gracefully, e.g., display an error message to the user
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <MaxWidthWrapper>
      {isLoading ? <p>Loading...</p> : <ShippingCart order={orders} />}
    </MaxWidthWrapper>
  );
};

export default OrderStatus;
