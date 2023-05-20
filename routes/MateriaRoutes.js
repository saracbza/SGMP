import express from 'express'
import MateriaController from '../controllers/MateriaController.js'

const MateriaRouter = express.Router()

MateriaRouter.get('/', MateriaController.list)
MateriaRouter.post('/', MateriaController.createMateria)
MateriaRouter.get('/:cod', MateriaController.getMateriaById)
MateriaRouter.put('/:cod', MateriaController.updateMateria)
MateriaRouter.delete('/:cod',MateriaController.destroyMateria)
export default MateriaRouter