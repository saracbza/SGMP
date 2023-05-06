import { getAllProd } from "../models/Produto.js"

class ProdutoController {
    static list (req,res){
        res.json(getAllProd())
    }
}

export default ProdutoController