import express from 'express'
import MateriaController from '../controllers/MateriaController.js'

const MateriaRouter = express.Router()

MateriaRouter.get('/', MateriaController.list)
MateriaRouter.post('/', MateriaController.createMateria)
MateriaRouter.get('/:id', MateriaController.getMateriaById)
MateriaRouter.put('/:id', MateriaController.updateMateria)
export default MateriaRouter