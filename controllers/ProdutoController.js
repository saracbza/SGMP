import { Produto, getAllProd, create } from "../models/Produto.js"

class ProdutoController {
    static list (req,res){
        res.json(getAllProd())
    }

    static createProduto(req,res){
        const {cod, desc,quant,desenho} = req.body
        if(!cod || !desc || !quant || !desenho){
            res.status(400).json({error: "Informe todos os campos!"})
            return
        }
    
        const produto = new Produto(2,desc,quant,desenho)
        const createdProduto = create(produto)
        res.status(201).json(createdProduto)
    }
}

export default ProdutoController