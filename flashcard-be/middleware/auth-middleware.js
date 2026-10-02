import jwt from "jsonwebtoken";
 
export const authMiddleware = async (req, res, next ) =>{
    const token = req.headers.authorization.split(' ')[1]
 
    const user = jwt.verify(token, 'qwer')
    console.log(user)
    if (user){
        req.user = user
        next()
    } 
}
export default authMiddleware
 
 