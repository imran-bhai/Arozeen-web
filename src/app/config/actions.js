"use server"
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { API_BASE_URL } from "./constants";

export const getToken = async () => {
  const cookieStore = cookies();
  const token = await cookieStore.get("token");

  if (!token) {
    return null;
  }

  const decodedToken = await jwt.verify(token.value, process.env.TOKEN_SECRET);
  return decodedToken;
};

export const getUserId = async () => {
  const cookieStore = cookies();
  const userId = await cookieStore.get("userId");
  if (!userId) {
    return null;
  }
  return userId.value;
};

export const logout = async () => {
  try {
    const Token = await getToken();
    const token = Token.tokenId; // Assuming 'tokenId' is the property holding the token

    if (token) {
   const response = await fetch(`${API_BASE_URL}logout-customer`, {
     method: "POST",
     headers: {
       Authorization: `Bearer ${token}`,
     },
   });

   const data = await response.json();
   

      const cookieStore = cookies();
      cookieStore.set("token", "", {
        path: "/",
        maxAge: -1,
      });
      return data;
    }
  } catch (error) {
    console.error("Logout Error:", error);
    // Consider informing the user of the error
  }
};
