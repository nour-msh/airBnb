import { Jwt } from "jsonwebtoken";
import { Admin } from "../model/Admin";

export async function login(){
const {email,password}=req.body;
const admin= await Admin.findOne({email});
if(!admin){
    return res.status(401).json({message:"Invalid email or password"})
  }
}