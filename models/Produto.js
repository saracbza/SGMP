export class Produto {
    constructor (cod, desc,quant,desenho){
        this.cod = cod
        this.desc = desc
        this.quant = quant
        this.desenho = desenho
    }
}

export const getAllProd = () => {
    return dbProdutos
}

export const dbProdutos = [
    new Produto (32, "Base dobrada 300x520", 2, "UX456058")
]