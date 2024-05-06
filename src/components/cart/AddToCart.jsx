"use client";
import clsx from "clsx";
import axios from "axios";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { getToken } from "@/app/config/actions";
import { API_BASE_URL } from "@/app/config/constants";
import { useDispatch } from "react-redux";
import { updateCart } from "@/app/store/slice/cartSlice";
import { useRouter } from "next/navigation";

function SubmitButton({ productId }) {
  const [token, setToken] = useState(null);
  const [cartProducts, setCartProducts] = useState([]);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const fetchToken = async () => {
      const retrievedToken = await getToken();
      setToken(retrievedToken);
    };
    fetchToken();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`${API_BASE_URL}products/${productId}`);
      const product = response.data.data;

      

      if (token) {
        const showCartItems = await axios.get(`${API_BASE_URL}show-cart`, {
          headers: {
            Authorization: `Bearer ${token.tokenId}`,
          },
        });
        const cartItems = showCartItems.data.data.cart_items;
        setCartProducts(cartItems);

        const matchedItem = cartItems?.find(
          (item) => item.product_id === product.id
        );

        if (matchedItem) {
          const quantity = matchedItem.quantity;

          const res = await axios.post(
            `${API_BASE_URL}update-cart-item/${matchedItem.id}`,
            { quantity: quantity + 1 },
            { headers: { Authorization: `Bearer ${token.tokenId}` } }
          );

          if (res.data.code) {
            dispatch(
              updateCart({
                product_id: matchedItem.id,
                quantity: matchedItem.quantity,
              })
            );
            toast.success("Add to Cart successfully");
          }
        } else {
          const res = await axios.post(
            `${API_BASE_URL}add-to-cart`,
            {
              product_id: product.id,
              quantity: 1,
            },
            {
              headers: { Authorization: `Bearer ${token.tokenId}` },
            }
          );

     
          if (res.status === 201) {
            dispatch(updateCart({ product_id: product.id, quantity: 1 }));
            toast.success("Add to Cart successfully");
          } else {
            toast.error("Add to Cart failed");
          }
        }
      } else {
        router.push("/login");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to add item to cart");
    }
  };

  const buttonClasses =
    "my-5 relative flex w-36 items-center justify-center rounded-lg bg-orange-600 p-3 tracking-wide";
  const disabledClasses = "cursor-not-allowed opacity-60 hover:opacity-60";

  return (
    <>
      <div className="grid grid-cols-2 ">
        <div
          onClick={handleAdd}
          
          className="cursor-pointer hover:opacity-90 flex justify-center items-center bg-[#F7EAE3] text-primary h-10"
        >
          ADD TO CART
        </div>
        <div className="hover:opacity-90 flex justify-center items-center bg-primary text-secondary h-10">
          BUY IT NOW
        </div>
      </div>
    </>
    // <button
    //   onClick={handleAdd}
    //   aria-label="Add to cart"
    //   className={clsx(buttonClasses, {
    //     "hover:opacity-90 bg-secondary text-gray-900 font-bold": true,
    //     disabledClasses: token === null,
    //   })}
    // >
    //   ADD TO CART
    // </button>
  );
}

export function AddToCart({ productId }) {
  return (
    <form>
      <SubmitButton productId={productId} />
      <p aria-live="polite" className="sr-only" role="status"></p>
    </form>
  );
}
