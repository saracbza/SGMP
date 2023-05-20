import { Produto, getAllProd, create, findByPk, } from "../models/Produto.js"

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

    static getProdutoById(req, res) {
        const cod = parseInt(req.params.cod)
        const Produto  = findByPk(cod)
        if(!Produto) {
            res.status(404).json({ error: 'Produto não encontrado' })
            return
        }
        res.json(Produto)
    }
    static updateProduto (req,res){
        const cod = parseInt(req.params.cod)
        const produto = findByPk(cod)
        if(!produto){
            res.status(404).json({error:"Não encontrado"})
            return
        }
    
        const {desc, quant,desenho} = req.body
        if(!desc || !quant || !desenho){
            res.status(400).json({error: "Informe todos os campos!"})
            return
        }
    
        produto.desc = desc
        produto.quant = quant
        produto.desenho = desenho
    
        update(cod,produto)
        res.json(produto)
    }
        
    static destroyProduto(req,res){
        const cod = parseInt(req.params.cod)
        const produto = findByPk(cod)
        if(!produto){
            res.status(404).json({error:"Não encontrado"})
            return
        }
        destroy(cod)
        res.json({message: "Removido com sucesso!"})
    }    


}
export default ProdutoController