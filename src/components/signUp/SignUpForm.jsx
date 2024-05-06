"use client";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import EyeIcon from "../iconSVG/EyeIcon";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Button } from "@/components/ui/button";
import UserIcon from "../iconSVG/UserIcon";
import PhoneIcon from "../iconSVG/PhoneIcon";
import MailboxIcon from "../iconSVG/MailBoxIcon";
import CalendarIcon from "../iconSVG/CalendarIcon";
import Gender from "../iconSVG/Gender";
import LockIcon from "../iconSVG/LockIcon";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import { API_BASE_URL } from "@/app/config/constants";


const SignUpForm = ({ onSubmit }) => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      gender: "",
      dateOfBirth: "",
    },
    criteriaMode: "all",
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const currentDate = new Date().toISOString().split("T")[0];

  const handleOnSubmit = async (data) => {
  
    try {
      setLoading(true);
      const response = await axios.post(
        `${API_BASE_URL}register-customer`,
        data
      );
      if (response.data.code === 200) {
        toast.success("Signup Successfully");
        router.push("/login");
      } else if (response.data.code === 422) {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGenderChange = (value) => {
    value.preventDefault();
    setInfo({ ...info, gender: value.target.value });
  };

  return (
    <div className="w-[85%]  sm:w-[80%]  py-4  rounded-lg">
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <div className="grid sm:grid-cols-2 sm:gap-x-12 ">
          <div className="flex flex-col ">
            <label
              className="text-black font-normal text-sm my-1"
              htmlFor="first-name"
            >
              First Name
            </label>
            <div className="relative mt-1">
              <UserIcon className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-400" />
              <Input
                className="pl-10 border-0 border-b-[1px] border-gray-800  focus:border-0 rounded-none focus:rounded
           placeholder:text-gray-400 mb-1"
                id="first-name"
                minlength="3"
                maxlength="21"
                placeholder="Enter your name"
                {...register("firstName", {
                  required: "This is required.",
                  minLength: {
                    value: 3,
                    message: "Greator than three charactors",
                  },
                  maxLength: {
                    value: 20,
                    message: "This input exceed maxLength.",
                  },
                })}
              />
              <ErrorMessage
                errors={errors}
                name="firstName"
                render={({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <p key={type} className="text-red-600 text-[14px]">
                      {message}
                    </p>
                  ))
                }
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label
              className="text-black font-normal text-sm my-1"
              htmlFor="last-name"
            >
              Last Name
            </label>
            <div className="relative mt-1">
              <UserIcon className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-400" />
              <Input
                className="pl-10 border-0 border-b-[1px] border-gray-800  focus:border-0 rounded-none focus:rounded
           placeholder:text-gray-400 mb-1"
                id="last-name"
                placeholder="Enter your last name"
                maxlength="21"
                {...register("lastName", {
                  required: "Last Name is required.",
                  minLength: {
                    value: 3,
                    message: "must be two charactors.",
                  },
                  maxLength: {
                    value: 20,
                    message: "This input exceed maxLength.",
                  },
                })}
              />

              <ErrorMessage
                errors={errors}
                name="lastName"
                render={({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <p key={type} className="text-red-600 text-[14px]">
                      {message}
                    </p>
                  ))
                }
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label
              className="text-black font-normal text-sm my-1"
              htmlFor="phone-number"
            >
              Phone Number
            </label>
            <div className="relative mt-1">
              <PhoneIcon className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-400" />
              <Input
                className="pl-10 border-0 border-b-[1px] border-gray-800 focus:border-0 rounded-none focus:rounded placeholder:text-gray-400 mb-1"
                id="phone-number"
                type="tel" // Change type to "tel" for phone number inputs
                placeholder="Enter your phone number"
                {...register("phoneNumber", {
                  required: "This is required.",
                  pattern: {
                    value: /^[0-9]+$/, // Allow between 10 to 13 digits
                    message: "Please enter a valid phone number.",
                  },
                })}
              />
              <ErrorMessage
                errors={errors}
                name="phoneNumber"
                render={({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <p key={type} className="text-red-600 text-[14px]">
                      {message}
                    </p>
                  ))
                }
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label
              className="text-black font-normal text-sm my-1"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative mt-1">
              <MailboxIcon className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-400" />
              <Input
                className="pl-10 border-0 border-b-[1px] border-gray-800  focus:border-0 rounded-none focus:rounded
              placeholder:text-gray-400 mb-1"
                id="email"
                placeholder="Enter your email"
                type="string"
                maxlength="25"
                {...register("email", {
                  required: "This is required.",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address.",
                  },
                  minLength: {
                    value: 3,
                    message: "This input exceed minLength.",
                  },
                  maxLength: {
                    value: 26,
                    message: "This input exceed maxLength.",
                  },
                })}
              />
              <ErrorMessage
                errors={errors}
                name="email"
                render={({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <p key={type} className="text-red-600 text-[14px]">
                      {message}
                    </p>
                  ))
                }
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label
              className="text-black font-normal text-sm my-1"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative mt-1">
              <LockIcon className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-400" />
              {showPassword ? (
                <div className="absolute right-1 top-5 transform -translate-y-1/2 text-gray-400 cursor-pointer">
                  <EyeIcon onClick={togglePasswordVisibility} className="" />
                </div>
              ) : (
                <div className="absolute right-1 top-5 transform -translate-y-1/2 text-gray-400 cursor-pointer">
                  <EyeIcon onClick={togglePasswordVisibility} className="" />
                </div>
              )}
              <Input
                className="pl-10 border-0 border-b-[1px] border-gray-800  focus:border-0 rounded-none focus:rounded
              placeholder:text-gray-400 mb-1"
                id="password"
                placeholder="Enter your password"
                maxLength={21}
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "This is required.",
                  minLength: {
                    value: 8,
                    message: "Minimum eight charactors should be.",
                  },
                  maxLength: {
                    value: 20,
                    message: "This input exceed maxLength.",
                  },
                })}
              />
              <ErrorMessage
                errors={errors}
                name="password"
                render={({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <p key={type} className="text-red-600 text-[14px]">
                      {message}
                    </p>
                  ))
                }
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label
              className="text-black font-normal text-sm my-1"
              htmlFor="password-confirm"
            >
              Password Confirmation
            </label>
            <div className="relative mt-1">
              <LockIcon className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-400" />
              {showConfirmPassword ? (
                <div className="absolute right-1 top-5 transform -translate-y-1/2 text-gray-400 cursor-pointer">
                  <EyeIcon
                    onClick={toggleConfirmPasswordVisibility}
                    className=""
                  />
                </div>
              ) : (
                <div className="absolute right-1 top-5 transform -translate-y-1/2 text-gray-400 cursor-pointer">
                  <EyeIcon
                    onClick={toggleConfirmPasswordVisibility}
                    className=""
                  />
                </div>
              )}
              <Input
                className="pl-10 border-0 border-b-[1px] border-gray-800  focus:border-0 rounded-none focus:rounded
            placeholder:text-gray-400 mb-1"
                id="password-confirm"
                placeholder="Confirm password"
                type={showConfirmPassword ? "text" : "password"}
                maxLength={21}
                {...register("confirmPassword", {
                  required: "This is required.",
                  minLength: {
                    value: 8,
                    message: "Minimum eight charactors should be.",
                  },
                  maxLength: {
                    value: 20,
                    message: "This input exceed maxLength.",
                  },
                  validate: (value) =>
                    value === watch("password") ||
                    "The passwords do not match.",
                })}
              />
              <ErrorMessage
                errors={errors}
                name="confirmPassword"
                render={({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <p key={type} className="text-red-600 text-[14px]">
                      {message}
                    </p>
                  ))
                }
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label
              className=" text-black font-normal text-sm my-1"
              htmlFor="gender"
            >
              Gender
            </label>
            <div className="relative mt-1">
              <Gender className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-400" />
              <select
                id="gender"
                {...register("gender", {
                  required: "This is required.",
                })}
                className="pl-10 flex h-10 w-full  bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 border-0 border-b-[1px] border-gray-800 rounded-none focus-visible:rounded focus-visible:border-hidden focus-visible:ring-offset-3 placeholder:text-gray-600 mb-4"
              >
                <option value="" disabled hidden className="">
                  Select your Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <ErrorMessage
                errors={errors}
                name="gender"
                render={({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <p key={type} className="text-red-600 text-[14px]">
                      {message}
                    </p>
                  ))
                }
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label
              className="text-black font-normal text-sm my-1"
              htmlFor="date-of-birth"
            >
              Date of Birth
            </label>
            <div className="relative mt-1">
              <CalendarIcon className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-400" />
              <Input
                className="pl-10 border-0 border-b-[1px] border-gray-800  focus:border-0 rounded-none focus:rounded
               placeholder:text-gray-400 mb-1"
                id="date-of-birth"
                placeholder="Enter your date of birthday"
                type="date"
                max={currentDate}
                {...register("dateOfBirth", {
                  required: "This is required.",
                  validate: (value) => value <= currentDate,
                })}
              />
              <ErrorMessage
                errors={errors}
                name="dateOfBirth"
                render={({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <p key={type} className="text-red-600 text-[14px]">
                      {message}
                    </p>
                  ))
                }
              />
            </div>
          </div>
        </div>
        <div className="my-5 flex  sm:justify-center ">
          <Button className=" rounded-full px-12  w-full sm:w-40" type="submit">
            Sign Up
          </Button>
        </div>

        <div className="text-center text-sm text-gray-400 py-4">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 font-semibold">
            Sign in
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;