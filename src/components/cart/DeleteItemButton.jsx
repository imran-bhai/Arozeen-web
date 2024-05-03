"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import axios from "axios";
import { toast } from "react-toastify";
import { API_BASE_URL } from "@/app/config/constants";

function DeleteItemButton({ item, token, newCartItems, setNewCartItems }) {
  const removeItem = async (item) => {
   
    if (token.tokenId) {
      try{
        const response = await axios.post(
          `${API_BASE_URL}remove-cart-item/${item.id}`,{},
          {
            headers: {
              Authorization: `Bearer ${token.tokenId}`,
            },
          }
        );
  
     
        setNewCartItems(!newCartItems);
        toast.success("Item removed successfully");
      }
      catch(error){
        console.log("error", error);
      }
     
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      {" "}
      <button
        type="button"
        onClick={() => removeItem(item)}
        aria-label="Remove cart item"
        className={clsx(
          "ease flex h-[17px] w-[17px] items-center justify-center rounded-full bg-neutral-500 transition-all duration-200",
          {
            "cursor-not-allowed px-0": false,
          }
        )}
      >
        <XMarkIcon className="hover:text-accent-3 mx-[1px] h-4 w-4 text-white dark:text-black" />
      </button>
    </form>
  );
}

export default DeleteItemButton;
