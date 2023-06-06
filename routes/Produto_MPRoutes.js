import express from 'express'
import Produto_MPController from '../controllers/Produto_MPController.js'

const Produto_MPRouter = express.Router()

Produto_MPRouter.get('/', Produto_MPController.index)
Produto_MPRouter.get('/:cod', Produto_MPController.show)
Produto_MPRouter.post('/', Produto_MPController.store)
//Produto_MPRouter.put('/:cod', Produto_MPController.update)
//Produto_MPRouter.delete('/:cod', Produto_MPController.destroy)
Produto_MPRouter.post('/:cod/materias', Produto_MPController.createProd_MP)
//Produto_MPRouter.delete('/:cod/materias', Produto_MPController.destroyProduto)

export default Produto_MPRouter