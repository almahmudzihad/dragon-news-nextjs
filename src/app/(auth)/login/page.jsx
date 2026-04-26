"use client";
import Link from "next/link";
import React from "react";

function LogIn() {
  const handelLoginFun = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

  }
  return (
    <div className="container mx-auto">
      <div className="">
        <form className="" onSubmit={handelLoginFun}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4   m-auto mt-8">
            <h1 className="text-2xl font-bold text-center p-2 ">
              Login your account
            </h1>
            <label className="label mt-4">Email address</label>
            <input
              type="email"
              className="input"
              placeholder="Enter your email"
              name="email"
              
            />
            <label className="label mt-4">Password</label>
            <input type="password" className="input" placeholder="password" name="password" />
            <button className="btn bg-black text-white border-black mt-4" >
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
