import express from "express";
import mongoose from "mongoose";
import userRouter from "./route/user.route.js";
import FlashCardRouter from "./route/flashcard.route.js";
import cors from 'cors'

const app = express()
app.use(cors)
const connectDB = async () => {
  await mongoose.connect('mongodb+srv://altansuhjavhlan12_db_user:Kq9acd4mU68BUCcY@cluster0.ofoe4jx.mongodb.net/')
}
app.use(express.json())
const port = 7878

connectDB()
app.use('/' , userRouter)
app.use('/' , FlashCardRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
