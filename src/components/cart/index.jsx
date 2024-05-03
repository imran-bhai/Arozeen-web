"use client";
import { useState, useEffect, Suspense } from "react";
import { getToken } from "@/app/config/actions";
import CartModal from "./Modal";
import axios from "axios";
import { API_BASE_URL } from "@/app/config/constants";
import { useSelector } from "react-redux";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [isToken, setIsToken] = useState(null);
  const [isCartLoading, setIsCartLoading] = useState(true);
  const [newCartItems, setNewCartItems] = useState(false);

  const cartProducts = useSelector((state) => state.cart);

  useEffect(() => {
    const fetchCartItems = async () => {
      const token = (await getToken())?.tokenId;
      try {
        if (!token) {
          throw new Error("Token not found");
        } else {
          const response = await axios.get(`${API_BASE_URL}show-cart`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          console.log("asfand:",response.data)
          setCartItems(response.data.data.cart_items); // Assuming the response contains cart items
        }

        setIsCartLoading(false);
      } catch (error) {
        console.error("Error fetching cart items:", error);
        setIsCartLoading(false); // Ensure loading state is updated even if there's an error
      }
    };

    fetchCartItems();
    
  }, [newCartItems, cartProducts]);

  return (
    <div className="">
      <Suspense>
        <CartModal
          cart={cartItems}
          newCartItems={newCartItems}
          setNewCartItems={setNewCartItems}
        />
      </Suspense>
    </div>
  );
}
