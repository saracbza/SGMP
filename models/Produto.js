export class Produto {
    constructor (cod, desc,quant,desenho){
        this.cod = cod
        this.desc = desc
        this.quant = quant
        this.desenho = desenho
    }
}
let codAtual = 1

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