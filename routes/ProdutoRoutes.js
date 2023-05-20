import express from 'express'
import ProdutoController from '../controllers/ProdutoController.js'

const ProdutoRouter = express.Router()

ProdutoRouter.get('/', ProdutoController.list)
ProdutoRouter.post('/', ProdutoController.createProduto)
ProdutoRouter.get('/:cod', ProdutoController.getProdutoById)
ProdutoRouter.put('/:cod', ProdutoController.updateProduto)
ProdutoRouter.delete('/:cod', ProdutoController.destroyProduto)
export default ProdutoRouter