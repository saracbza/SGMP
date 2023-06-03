import Produto from "../models/Produto.js"

class ProdutoController {
    static async list(req,res){
        const produtos = await Produto.findAll()
        res.json(produtos)
    }

    static async createProduto(req,res){
        const {desc,desenho} = req.body
        if(!desc || !desenho){
            res.status(400).json({error: "Informe todos os campos!"})
            return
        }

        const createdProduto = await Produto.create({desc,quant,desenho})
        res.status(201).json(createdProduto)
    }

    static async getProdutoById(req,res) {
        const cod = parseInt(req.params.cod)
        const produto  = await Produto.findByPk(cod)
        if(!produto) {
            res.status(404).json({ error: 'Produto não encontrado' })
            return
        }
        res.json(produto)
    }

    static async updateProduto (req,res){
        const cod = parseInt(req.params.cod)
        const produto = await Produto.findByPk(cod)
        if(!produto){
            res.status(404).json({error:"Não encontrado"})
            return
        }
    
        const {desc,desenho} = req.body
        if(!desc || !desenho){
            res.status(400).json({error: "Informe todos os campos!"})
            return
        }
    
        const updatedProduto = await Produto.update({desc,desenho},{where: {cod: produto.cod}})
        res.json(updatedProduto)
    }
        
    static async destroyProduto(req,res){
        const cod = parseInt(req.params.cod)
        const produto = await Produto.findByPk(cod)
        if(!produto){
            res.status(404).json({error:"Não encontrado"})
            return
        }
        await Produto.destroy({where: {cod: produto.cod}})
        res.json({message: "Removido com sucesso!"})
    }    
}
export default ProdutoController