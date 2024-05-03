"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { API_BASE_URL } from "@/app/config/constants";
import { getToken } from "@/app/config/actions";

const ContactForm = () => {
  const [token, setToken] = useState();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comments: "",
  });

  useEffect(() => {
    const Token = async () => {
      const token = await getToken();
      setToken(token.tokenId);
    };
    Token();
  });

  const handleSend = async () => {
    const response = await axios.post(
      `${API_BASE_URL}/contact-us`,
      {
        firstName: formData.name,
        email: formData.email,
        phone: formData.phone,
        comments: formData.comments,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("response:", response.data);
  };
  return (
    <div className="py-5">
      <p className="">* For a faster reply please include your order number</p>
      <div className="flex gap-x-5 py-5 ">
        <Input
          placeholder="Name"
          className="rounded-xl"
          type="text"
          minLength="3"
          maxLength="30"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <Input
          id="email"
          type="email" // Change type to 'email' for built-in validation
          maxLength="30"
          placeholder="Email *"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="rounded-xl"
          required // Add 'required' attribute for HTML5 form validation
        />
      </div>
      <div className="">
        <Input
          id="phone"
          type="text"
          maxLength="30"
          placeholder="Phone number"
          value={formData.phone}
          onChange={(e) => {
            const phone = e.target.value.replace(/\D/g, ""); // Remove non-digit characters
            if (phone.length <= 12) {
              setFormData({ ...formData, phone });
            }
          }}
          className="rounded-xl w-full"
        />
      </div>
      <div className="py-5">
        <Textarea
          id="comments"
          type="text"
          maxLength="500"
          placeholder="Comments"
          className=" rounded-xl w-full "
          value={formData.comments}
          onChange={(e) =>
            setFormData({ ...formData, comments: e.target.value })
          }
        />
      </div>
      <div className="flex justify-center sm:justify-normal">
        <Button className="rounded-2xl py-1 px-10" onClick={() => handleSend()}>
          Send
        </Button>
      </div>
    </div>
  );
};

export default ContactForm;
