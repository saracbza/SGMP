export class Materia {
    constructor (cod, desc,dimensoes){
        this.cod = cod
        this.desc = desc
        this.dimensoes = dimensoes
    }
}

let codAtual = 1

export const findByPk = (cod) => {
    return dbMateria.find(materia => materia.cod === cod)
}

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
export const update = (cod, materia)
    const materiaToUpdate = findByPk(cod)
    if(!materiaToUpdate) {
        return false
    }
    const index = dbMateria.indexOf(materiaToUpdate)
    dbMateria[index] = materia
    return true
