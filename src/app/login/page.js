"use client";
import {useRouter} from "next/navigation";
import {useState} from "react";

import axios from "axios";


export default function LoginPage() {
const [username,setUser]=useState("");
const [pass,setPass]=useState("");
const [mess,setMess]=useState("");

const router=useRouter();

async function handleSubmit(e){
  e.preventDefault();

  try{
    const res=await axios.post("api/auth/login",{
      username,
      pass
    })
    setMess(res.data.message);
    router.replace("/home");
  }
  catch(error){
        setMess(error.response?.data?.error || error.message);
  }
}

  return (
    <div className="bg-[#2130B5] text-white h-screen w-screen flex justify-center items-center">

      <form onSubmit={handleSubmit} className="bg-white border border-black text-black w-80 p-6 rounded-xl shadow-lg flex flex-col gap-4">

        <h1 className="text-3xl font-bold text-center text-[#2130B5]">
          Login
        </h1>

        {/* Username */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-bold">
            Username
          </label>

          <input
            type="text"
            placeholder="Enter username"
            onChange={(e)=>setUser(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-[#2130B5]"
          />
        </div>


        {/* Password */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-bold">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter password"
            onChange={(e)=>setPass(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-[#2130B5]"
          />
        </div>

        <div className="text-gray-600 text-center">{mess}</div>

        {/* Forgot Password */}
        <div className="flex justify-end">
          <button
            type="button"
            className="text-sm text-[#2130B5] hover:underline"
          >
            Forgot Password?
          </button>
        </div>


        {/* Sign In */}
        <button
          type="submit"
          className="
          bg-[#2130B5]
          text-white
          py-2
          rounded-full
          hover:bg-green-500
          transition-all
          duration-200
          "
        >
          Sign In
        </button>


        {/* Signup option */}
        <p className="text-sm text-center text-gray-600">
          Don't have an account?

          <button
            type="button"
            className="ml-1 text-[#2130B5] font-semibold hover:underline"
            onClick={()=>router.replace("/signin")}
          >
            Sign Up
          </button>
        </p>

      </form>

    </div>
  );
}