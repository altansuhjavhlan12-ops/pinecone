import express from "express";
import { createCard } from "../controller/card/create.js";
import { getCard } from "../controller/card/get.js";
 
const FlashCardRouter = express.Router()
 
FlashCardRoute.post('/create-card', createCard )
FlashCardRoute.get('/get-card', getCard )
FlashCardRoute.post('/get-card-words', getCard )
 
export default FlashCardRouter
 