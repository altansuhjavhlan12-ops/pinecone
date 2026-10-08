import { CardModel } from "../../models/card.model.js"
import { WordModel } from "../../models/word.model.js"

export const getCard = async (req ,res) => {
    const card = await CardModel.find()

    res.json(cards)
}