import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import LoadingDots from "../LoadingDots";
import { debounce } from "lodash"; // Import debounce from lodash
import { updateCart } from "@/app/store/slice/cartSlice";
import axios from "axios";
import { API_BASE_URL } from "@/app/config/constants";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { toast } from "react-toastify";

function SubmitButton({ type, item, token, newCartItems, setNewCartItems }) {
  const [pending, setPending] = useState(false); // Track pending state locally
  const dispatch = useDispatch();

// Create the debounced function directly
const debouncedUpdateCart = debounce(async () => {
  try {
    setPending(true); // Set pending state to true before the request
    let updatedQuantity;
    if (type === "plus") {
      updatedQuantity = item.quantity + 1;
    } else {
      updatedQuantity = item.quantity - 1;
      if (updatedQuantity < 1) return; // Ensure quantity doesn't go below 1
    }
    if (updatedQuantity > 10) return(
      toast.error("Reached the Limit")
    ); // Do not allow increment if quantity exceeds 10

    const updated = await axios.post(
      `${API_BASE_URL}update-cart-item/${item.id}`,
      {
        quantity: updatedQuantity,
      },
      {
        headers: {
          Authorization: `Bearer ${token.tokenId}`,
        },
      }
    );

    setNewCartItems(!newCartItems);
    dispatch(updateCart(updated));
  } catch (error) {
    console.error(error);
  } finally {
    setPending(false); // Reset pending state after the request completes
  }
}, 500); // 500ms delay


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (pending) return; // Prevent multiple submissions
    debouncedUpdateCart(); // Call the debounced function
  };

  return (
    <button
      type="button" // Change to type="button"
      onClick={handleSubmit}
      aria-label={type === "plus" ? "Increase item quantity" : "Reduce item quantity"}
      aria-disabled={pending}
      className={clsx(
        "ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80",
        {
          "cursor-not-allowed": pending,
          "ml-auto": type === "minus",
        }
      )}
    >
      {pending ? (
        <LoadingDots className="bg-black dark:bg-white" />
      ) : type === "plus" ? (
        <PlusIcon className="h-4 w-4 dark:text-neutral-500" />
      ) : (
        <MinusIcon className="h-4 w-4 dark:text-neutral-500" />
      )}
    </button>
  );
}

export function EditItemQuantityButton({ item,quantity, type, token, newCartItems, setNewCartItems }) {
  return (
    <SubmitButton
      type={type}
      item={item}
      quantity={quantity}
      token={token}
      newCartItems={newCartItems}
      setNewCartItems={setNewCartItems}
    />
  );
}
