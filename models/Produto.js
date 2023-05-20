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

export const update = (cod, produtoUpdate) => {
    const produto = findByPk(cod)
    if(!produto) {
        return false
    }
    const index = dbProdutos.indexOf(produto)
    dbProdutos[index] = produtoUpdate
    return true
}

export const destroy = (cod) => {
    const produto = findByPk(cod)
    if (!produto){
        return false
    }
    const index = dbProdutos.indexOf(produto)
    dbProdutos.splice (index,1)
    return true
}

export const dbProdutos = [
    new Produto (1, "Base dobrada 300x520", 2, "UX456058")
]