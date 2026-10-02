const express = require('express');

const ClassRoute = express.Router()

ClassRoute.post('/class', async (req,res) => {
  const body = req.body

  try{
    const response = await ClassModel.create({
      name: body.name,
      teachers: body.teachers,
      roomNumber: body.roomNumber,
    })
    res.json(response)
  } catch (error) {
    res.json(error)
  }
})

module.exports = ClassRoute