import express from "express";
import { createCard } from "../controller/card.controller.js";
 
 
const FlashCardRouter = express.Router()
 
 
FlashCardRouter.post('/create', createCard )
 
export default FlashCardRouter
 