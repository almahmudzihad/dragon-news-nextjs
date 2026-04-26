"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelregisterFun = (data) => {
    console.log(data);
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
              {...register("img")}
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
            <input
              type="password"
              className="input"
              placeholder="password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-500">Password is required</span>
            )}
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
