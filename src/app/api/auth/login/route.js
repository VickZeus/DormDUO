import supabase from "@/lib/supabase";
import bcrypt from "bcryptjs"
import {createToken} from "@/lib/auth";
import {cookies} from "next/headers";
import {redis} from "@/lib/redis"



export async function POST(req){
    const {username,pass}=await req.json();
    const {data,error}=await supabase.from("user_info").select("*").eq("username", username).maybeSingle();

    if(error){
        console.log(error.message);
        return new Response(JSON.stringify({error:"Invalid username or password"}),{status:401})    
    }

    const hpass=await bcrypt.compare(pass,data.pass);

    if(hpass){
        const token=await createToken({id:data.uid,username:data.username});
        const cookieStore=await cookies();
        cookieStore.set("session_token",token,{httpOnly:true,maxAge:2*24*60*60,path:"/"});

        await redis.set(`user:${data.uid}`,JSON.stringify({username:data.username,email:data.email}));

        return new Response(JSON.stringify({message:"Login Successfull"}),{status:200})
    }
    else{
        return new Response(JSON.stringify({error:"Invalid username or password"}),{status:401})
    }

}