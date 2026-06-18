import { SignJWT, jwtVerify } from "jose";

const secret = new TextEncoder().encode(
    process.env.JWT_SECRET
);


export async function createToken(user){
    const token = await new SignJWT(user)
        .setProtectedHeader({
            alg:"HS256"
        })
        .setIssuedAt()
        .setExpirationTime("2d")
        .sign(secret);
    return token;
}



export async function verifyToken(token){
    try{

        const {payload} = await jwtVerify(
            token,
            secret
        );

        return payload;

    }
    catch(error){

        return null;

    }

}