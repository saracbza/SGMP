export class Materia {
    constructor (cod, desc,dimensoes){
        this.cod = cod
        this.desc = desc
        this.dimensoes = dimensoes
    }
}

let codAtual = 1

export const create = (materia) => {
    codAtual++
    materia.cod = codAtual
    dbMateria.push(materia)
    return materia
}

export const getAllMat = () => {
    return dbMateria
}

export const dbMateria = [
    new Materia (1, "Viga U", "6''")
]