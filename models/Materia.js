export class Materia {
    constructor (cod, desc,dimensoes){
        this.cod = cod
        this.desc = desc
        this.dimensoes = dimensoes
    }
}

export const getAllMat = () => {
    return dbMateria
}

export const dbMateria = [
    new Produto (2, "Viga U", "6''")
]