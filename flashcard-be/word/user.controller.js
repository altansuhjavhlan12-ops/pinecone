import bcrypt, { compare } from "bcrypt"
import UserModel from "../models/user.schema.js";
 
export const signup = async (req,res) => {
    const body = req.body
 
    const hashedPassword = await bcrypt.hash(body.password ,10)
    try{
      const response = await UserModel.create({
        username: body.username,
        email: body.email,
        password: hashedPassword,
      })
      res.json(response).status(200)
    } catch (error) {
      res.json(error).status(404)
    }
  }
  export const login = async (req , res) =>{
    const body =req.body
 
    const user = await UserModel.findOne({
        email:body.email,
        password: body.password,
    })
    if (!user) res.json('user not found')
 
        const isvalid = await bcrypt.compare(body.password , user.password)
 
    if (!isvalid) res.json('wrong pasword')
    const token = await jwt.sign({
    email:user.email,
    username:user.username
    }, 'qwer', {expiresIn: '1h'})
    res.json(token)
  }
 
 
 
 
 
 
 