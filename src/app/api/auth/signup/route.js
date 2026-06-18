import supabase from "@/lib/supabase";
import bcrypt from "bcryptjs"

export async function POST(req){
    const {username,email,pass,hpass}=await req.json();

    if(pass!=hpass)return new Response(JSON.stringify({error:"Passwords Do Not Match"}),{status:400})
    // To check email, implement the functionality to send OTP and verify 
    
    const uid = crypto.randomUUID();
    const createdOn=new Date().toISOString();;
    
    const passF=await bcrypt.hash(pass,10);

    const {data,error}=await supabase
        .from("user_info")
        .insert([
            {
                uid,
                username,
                pass:passF,
                createdOn,
                email
            }
        ])
    
    if(error){
        if(/user_info_email_key/.test(error.message))return new Response(JSON.stringify({error:"Email Already Exists"}),{status:500})
        if(/user_info_username_key/.test(error.message))return new Response(JSON.stringify({error:"Username Already Exists"}),{status:500})
    }
    return new Response(JSON.stringify({message:"success"}),{status:200})
}