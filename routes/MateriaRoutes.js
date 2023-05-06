import express from 'express'
import MateriaController from '../controllers/MateriaController.js'

const MateriaRouter = express.Router()

MateriaRouter.get('/', MateriaController.list)

export default MateriaRouter