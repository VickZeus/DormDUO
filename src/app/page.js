"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "./home/page";

function LoginAnim(){
  const router=useRouter();

  return(
    <>
    <div className="w-screen h-screen bg-[#2130B5] text-white flex flex-col justify-center items-center gap-2">
        <div className="text-4xl font-bold animate-jumpAround">
          DormDuo
        </div>

        <button className="px-2 py-2 bg-white text-[#2130B5] rounded hover:bg-blue-500 hover:text-white hover:border-black hover:border"
        onClick={()=>router.push("login")}>
            Login
        </button>
    </div>
  </>
  )
}


export default function Home() {
  return (
    <>
      <LoginAnim/>
    </>
  );
}
