import express from 'express'
import ProdutoController from '../controllers/ProdutoController.js'

const ProdutoRouter = express.Router()

ProdutoRouter.get('/produtos', ProdutoController.list)
ProdutoRouter.post('/produto', ProdutoController.createProduto)
ProdutoRouter.get('/:cod', ProdutoController.getProdutoById)
ProdutoRouter.put('/:cod', ProdutoController.updateProduto)
ProdutoRouter.delete('/:cod', ProdutoController.destroyProduto)
export default ProdutoRouter