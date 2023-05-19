export class Produto {
    constructor (cod, desc,quant,desenho){
        this.cod = cod
        this.desc = desc
        this.quant = quant
        this.desenho = desenho
    }
}
let codAtual = 1

export const findByPk = (cod) => {
    return dbProdutos.find(produto => produto.cod === cod)
}

export const create = (produto) => {
    codAtual++
    produto.cod = codAtual
    dbProdutos.push(produto)
    return produto
}

export const getAllProd = () => {
    return dbProdutos
}

export const dbProdutos = [
    new Produto (1, "Base dobrada 300x520", 2, "UX456058")
]
export const update = (cod, produto)
    const produtoToUpdate = findByPk(cod)
    if(!produtoToUpdate) {
        return false
    }
    const index = dbProdutos.indexOf(produtoToUpdate)
    dbProdutos[index] = produto
    return true