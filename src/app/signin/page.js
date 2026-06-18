"use client";
import {useRouter} from "next/navigation";
import {useState} from "react";
import axios from "axios";



export default function SignIn() {
  const [username,setUser]=useState("");
  const [email,setEmail]=useState("");
  const [pass,setPass]=useState("");
  const [mess,setMess]=useState("");
  const [hpass,setHPass]=useState(""); 
  
  const router=useRouter();
async function handleSubmit(e) {
  e.preventDefault();

  try {
    const res = await axios.post("/api/auth/signup", {
      username,
      email,
      pass,
      hpass,
    });
    router.replace("/login");
  } catch (error) {
    setMess(error.response?.data?.error || error.message);
  }
}


  return (
    <div className="bg-[#2130B5] text-white h-screen w-screen flex justify-center items-center">

      <form onSubmit={handleSubmit} className="bg-white text-black w-90  p-6 rounded-xl shadow-lg flex flex-col gap-4">

        <h1 className="text-3xl font-bold text-center text-[#2130B5]">
          SingUp
        </h1>


        {/* Username */}
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-sm">
            Username
          </label>

          <input
            type="text"
            placeholder="Enter username"
            onChange={(e)=>setUser(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 outline-none focus:border-[#2130B5]"
          />
        </div>


        {/* Email */}
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-sm">
            Email ID
          </label>

          <input
          onChange={(e)=>setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
            className="border border-gray-300 rounded px-3 py-2 outline-none focus:border-[#2130B5]"
          />
        </div>


        {/* Password */}
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-sm">
            Password
          </label>

          <input
            type="password"
            onChange={(e)=>setPass(e.target.value)}
            placeholder="Create password"
            className="border border-gray-300 rounded px-3 py-2 outline-none focus:border-[#2130B5]"
          />
        </div>


        {/* Confirm Password */}
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-sm">
            Confirm Password
          </label>

          <input
            type="password"
            onChange={(e)=>setHPass(e.target.value)}
            placeholder="Confirm password"
            className="border border-gray-300 rounded px-3 py-2 outline-none focus:border-[#2130B5]"
          />
        </div>

        <div className="text-gray-400 text-center">{mess||""}</div>

        {/* Sign In Button */}
        <button
          type="submit"
          className="
          bg-[#2130B5]
          text-white
          py-2
          rounded
          hover:bg-blue-700
          transition-all
          duration-200
          "
        >
          Sign In
        </button>


        <p className="text-sm text-center text-gray-600">
          Already have an account?
          <button
            type="button"
            onClick={()=>router.replace("/login")}
            className="ml-1 text-[#2130B5] font-semibold hover:underline"
          >
            Login
          </button>
        </p>

      </form>

    </div>
  );
}