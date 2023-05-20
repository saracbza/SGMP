import express from 'express'
import MateriaController from '../controllers/MateriaController.js'

const MateriaRouter = express.Router()

MateriaRouter.get('/materias_primas', MateriaController.list)
MateriaRouter.post('/materias_prima', MateriaController.createMateria)
MateriaRouter.get('/:cod', MateriaController.getMateriaById)
MateriaRouter.put('/:cod', MateriaController.updateMateria)
MateriaRouter.delete('/:cod',MateriaController.destroyMateria)
export default MateriaRouter