"use client";
import { getToken, getUserId } from "@/app/config/actions";
import { API_BASE_URL } from "@/app/config/constants";
import CalendarIcon from "@/components/iconSVG/CalendarIcon";
import Gender from "@/components/iconSVG/Gender";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const page = () => {
  const [customerInfo, setCustomerInfo] = useState([]);
  const [refetchCustomerInfo, setRefetchCustomerInfo] = useState(false);
  const [userId, setUserId] = useState();
  const [Token, setToken] = useState();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    gender: "",
    dob: "",
  });

  const [editMode, setEditMode] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phoneNumber: false,
    gender: false,
    dob: false,
  });

  // Handle toggle edit mode for a specific field
  const toggleEditMode = (field) => {
    setEditMode({ ...editMode, [field]: !editMode[field] });
  };

  // In the renderField function, update the onClick event to call toggleEditMode with the field name
  const renderField = (field, label) => {
    if (editMode[field]) {
      return (
        <Input
          type="text"
          value={customerInfo[field] || ""}
          onChange={(e) => handleInputChange(field, e.target.value)}
        />
      );
    } else {
      return (
        <span onClick={() => toggleEditMode(field)}>{customerInfo[field]}</span>
      );
    }
  };

  // In the handleInputChange function, update the state correctly
  const handleInputChange = (field, value) => {
    setCustomerInfo({ ...customerInfo, [field]: value });
  };

  useEffect(() => {
    const fetchCartItems = async () => {
      const id = await getUserId();
      setUserId(id);

      try {
        const token = (await getToken())?.tokenId;

        if (!token) {
          throw new Error("Token not found");
        } else {
          setToken(token);
        }

        const response = await axios.get(`${API_BASE_URL}customer`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCustomerInfo(response.data);
        return response;
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, [refetchCustomerInfo]);

  const handleUpdate = async () => {
    try {
      const updatedData = { ...customerInfo.data, ...formData }; // Merge formData with customerInfo data
      const response = axios.post(
        `${API_BASE_URL}update-customer/${userId}`,
        updatedData,
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      );
      setCustomerInfo(response.data);
      return response;
      setRefetchCustomerInfo(!refetchCustomerInfo);
    } catch (error) {
      console.error("Error updating cart items:", error);
    }
  };

  const handleGenderChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, gender: value });
  };

 

  const handleDateOfBirthChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, dob: value });
  };

  const currentDate = new Date().toISOString().split("T")[0]; // Get current date in 'yyyy-mm-dd' format

  return (
    <MaxWidthWrapper>
      <div className="w-full font-tec gap-x-6 flex ">
        <div className="w-[30%] rounded-lg bg-gray-100 flex flex-col py-5 justify-center items-center ">
          <div className="">
            <Image
              src=""
              alt="@shadcn"
              width={100}
              height={100}
              className="rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center items-center py-3">
            <h3 className="text-xl font-semibold ">
              {customerInfo.data?.firstname} {customerInfo.data?.lastname}
            </h3>
            <h5 className="text-gray-500 ">{customerInfo.data?.email}</h5>
          </div>
          <div className="py-5 flex flex-col justify-center items-center">
            <h3 className="text-blue-600 font-semibold text-2xl">About</h3>
            <p className="text-center py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              fugit omnis. Modi, similique repellat exercitationem tempore
              consequuntur non eum! Velit, adipisci voluptates! Ad iure autem
              saepe enim totam amet natus eligendi similique.
            </p>
          </div>
        </div>
        <div className="relative w-[70%] rounded-lg bg-gray-100 flex flex-col px-8 py-5">
          <h3 className="text-xl text-blue-600 ">Personal Details</h3>
          <div className="flex flex-wrap mb-4 gap-x-2 py-5">
            <div className="w-full md:w-[48%]">
              <label
                className="text-black font-normal text-sm my-1"
                htmlFor="firstName"
              >
                First Name
              </label>
              <div className="relative mt-1">
                <Input
                  className=" border-0 border-b-[1px] border-gray-800  focus:border-0 rounded-none focus:rounded
                            placeholder:text-gray-400 mb-1"
                  id="firstName"
                  placeholder="first name"
                  type="text"
                  minLength="3"
                  maxLength="20"
                  value={
                    editMode.firstName
                      ? formData.firstName
                      : customerInfo.data?.firstname
                  }
                  onClick={() => toggleEditMode("firstName")} // Call toggleEditMode with the field name
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      firstName: e.target.value,
                    })
                  }
                />
                {/* {errors.firstName && (
      <p className="text-red-500 text-xs ">
        {errors.firstName}
      </p>
    )} */}
              </div>
            </div>

            <div className="w-full md:w-[48%]">
              <label
                className="text-black font-normal text-sm my-1"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <div className="relative mt-1">
                <Input
                  className=" border-0 border-b-[1px] border-gray-800  focus:border-0 rounded-none focus:rounded
                placeholder:text-gray-400 mb-1"
                  id="lastName"
                  placeholder="last name"
                  type="text"
                  value={
                    editMode.lastName
                      ? formData.lastName
                      : customerInfo.data?.lastname
                  }
                  onClick={() => toggleEditMode("lastName")} // Call toggleEditMode with the field name
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      lastName: e.target.value,
                    })
                  }
                />
                {/* {errors.lastName && (
                  <p className="text-red-500 text-xs ">{errors.lastName}</p>
                )} */}
              </div>
            </div>
            <div className="w-full md:w-[48%] py-5">
              <label
                className="text-black font-normal text-sm my-1"
                htmlFor="email"
              >
                Email
              </label>
              <div className="relative mt-1">
                <Input
                  className=" border-0 border-b-[1px] border-gray-800  focus:border-0 rounded-none focus:rounded
           placeholder:text-gray-400 mb-1"
                  id="email"
                  placeholder="Email@gmail.com"
                  type="text"
                  value={
                    editMode.email ? formData.email : customerInfo.data?.email
                  }
                  onClick={() => toggleEditMode("email")} // Call toggleEditMode with the field name
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                />
                {/* {errors.email && (
                  <p className="text-red-500 text-xs ">{errors.email}</p>
                )} */}
              </div>
            </div>
            <div className="w-full md:w-[48%] py-5">
              <label
                className="text-black font-normal text-sm my-1"
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              <div className="relative mt-1">
                <Input
                  className=" border-0 border-b-[1px] border-gray-800  focus:border-0 rounded-none focus:rounded
           placeholder:text-gray-400 mb-1"
                  id="phoneNumber"
                  placeholder="Phone Number"
                  type="text"
                  minLength="10"
                  maxLength="14"
                  value={
                    editMode.phoneNumber
                      ? formData.phoneNumber
                      : customerInfo.data?.phone
                  }
                  onClick={() => toggleEditMode("phoneNumber")} // Call toggleEditMode with the field name
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      phoneNumber: e.target.value,
                    })
                  }
                />
                {/* {errors.phoneNumber && (
                  <p className="text-red-500 text-xs ">{errors.phoneNumber}</p>
                )} */}
              </div>
            </div>

            <div className="w-full md:w-[48%] ">
              <label
                className=" text-black font-normal text-sm my-1"
                htmlFor="gender"
              >
                Gender
              </label>
              <div className="relative mt-1">
                <Gender className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-400" />
                {editMode.gender ? (
                  <select
                    value={formData.gender}
                    onChange={handleGenderChange}
                    className="pl-10 flex h-10 w-full  bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 border-0 border-b-[1px] border-gray-800 rounded-none focus-visible:rounded focus-visible:border-hidden focus-visible:ring-offset-3 placeholder:text-gray-600 mb-4"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                ) : (
                  <select
                    value={customerInfo.data?.gender}
                    onChange={handleGenderChange}
                    onClick={() => toggleEditMode("gender")}
                    className="pl-10 flex h-10 w-full  bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 border-0 border-b-[1px] border-gray-800 rounded-none focus-visible:rounded focus-visible:border-hidden focus-visible:ring-offset-3 placeholder:text-gray-600 mb-4"
                  >
                    <option value="other">{customerInfo.data?.gender}</option>
                  </select>
                )}
              </div>
            </div>

            <div className="w-full md:w-[48%]">
              <label
                className="text-black font-normal text-sm my-1"
                htmlFor="date-of-birth"
              >
                Date of Birth
              </label>
              <div className="relative mt-1">
                <CalendarIcon className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-400" />
                {editMode.dob ? (
                  <Input
                    className="pl-10 border-0 border-b-[1px] border-gray-800  focus:border-0 rounded-none focus:rounded
                              placeholder:text-gray-400 mb-1"
                    id="date-of-birth"
                    placeholder="Enter your date of birthday"
                    type="date"
                    value={editMode.dob ? formData.dob : ""}
                    max={currentDate}
                    onChange={(e) => {
                      const selectedDate = e.target.value;
                      if (selectedDate <= currentDate) {
                        setFormData({ ...formData, dob: selectedDate });
                      }
                    }}
                  />
                ) : (
                  <Input
                    className="pl-10 border-0 border-b-[1px] border-gray-800  focus:border-0 rounded-none focus:rounded
                    placeholder:text-gray-400 mb-1"
                    id="date-of-birth"
                    placeholder="Enter your date of birthday"
                    type="date"
                    value={customerInfo.data?.dob}
                    onClick={() => toggleEditMode("dob")}
                    max={currentDate}
                    onChange={(e) => {
                      const selectedDate = e.target.value;
                      if (selectedDate <= currentDate) {
                        setFormData({ ...formData, dob: selectedDate });
                      }
                    }}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="absolute space-x-2 end-12 bottom-7">
            <Button variant="outline">Cancel</Button>
            <Button onClick={() => handleUpdate()}>Update</Button>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default page;
