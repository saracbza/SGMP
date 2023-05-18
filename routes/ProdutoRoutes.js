import express from 'express'
import ProdutoController from '../controllers/ProdutoController.js'

const ProdutoRouter = express.Router()

ProdutoRouter.get('/', ProdutoController.list)
ProdutoRouter.post('/', ProdutoController.createProduto)
ProdutoRouter.get('/:id', ProdutoController.getProdutoById)

export default ProdutoRouter