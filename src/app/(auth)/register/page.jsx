"use client";
import { authClient } from "@/lib/auth-client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const handelregisterFun = async (data) => {
    
    const { email, password, name, image } = data;

    const {data: res , error} = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      image: image,
      callbackURL: "/",
    })
    
    if (error) {
      alert(error.message);
    }
    if (res) {
      alert("Registration successful");
    }
    
  };

  return (
    <div className="container mx-auto">
      <div className="">
        <form className="" onSubmit={handleSubmit(handelregisterFun)}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4   m-auto mt-8">
            <h1 className="text-2xl font-bold text-center p-2 ">
              Register your account
            </h1>
            <label className="label mt-4">Your Name</label>
            <input
              type="text"
              className="input"
              placeholder="Enter your Name"
              {...register("name", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500">Name is required</span>
            )}

            <label className="label mt-4">Photo Url</label>
            <input
              type="text"
              className="input"
              placeholder="photo link"
              {...register("image", )}
            />
            <label className="label mt-4">Email</label>
            <input
              type="email"
              className="input"
              placeholder="password"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500">Email is required</span>
            )}
            <label className="label mt-4">Password</label>
            <fieldset className="fieldset relative">
            <input
              type={showPassword ? "text" : "password"}
              className="input"
              placeholder="password"
              {...register("password", { required: true })}
            />
            <span className="text-xl absolute right-2 top-4 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.password && (
              <span className="text-red-500">Password is required</span>
            )}
            </fieldset>
            <button className="btn bg-black text-white border-black mt-4">
              Register
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
