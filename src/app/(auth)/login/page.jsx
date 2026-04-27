"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function LogIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const handelLoginFun = async (data) => {
    
    const { data: res, error } = await authClient.signIn.email({
      email: data.email, // required
      password: data.password, // required
      rememberMe: true,
      callbackURL: "/",
    });

    if (error) {
      alert(error.message);
    }
    if (res) {
      alert("Login successful");
    }
  };

  return (
    <div className="container mx-auto">
      <div className="">
        <form className="" onSubmit={handleSubmit(handelLoginFun)}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4   m-auto mt-8">
            <h1 className="text-2xl font-bold text-center p-2 ">
              Login your account
            </h1>
            <label className="label mt-4">Email address</label>
            <input
              type="email"
              className="input"
              placeholder="Enter your email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500">Password is required</span>
            )}
            
            <label className="label mt-4">Password</label>
            <fieldset className="fieldset relative">
            <input
              type={showPassword ? "text" : "password"}
              className="input"
              placeholder="password"
              {...register("password", { required: true })}
            />
            <span className="text-xl absolute right-2 top-4 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
            
            {errors.password && (
              <span className="text-red-500">Password is required</span>
            )}
            </fieldset>
            <button className="btn bg-black text-white border-black mt-4">
              Login
            </button>
          </fieldset>
        </form>
        <p className="text-center text-sm p-4">
          Don't have an account?{" "}
          <Link href="/register" className="text-blue-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LogIn;
