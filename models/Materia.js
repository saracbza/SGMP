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

export const update = (cod, materiaUpdate) => {
    const materia = findByPk(cod)
    if(!materia) {
        return false
    }
    const index = dbMateria.indexOf(materia)
    dbMateria[index] = materiaUpdate
    return true
}

export const destroy = (cod) => {
    const materia = findByPk(cod)
    if (!materia){
        return false
    }
    const index = dbMateria.indexOf(materia)
    dbMateria.splice (index,1)
    return true
}

export const dbMateria = [
        new Materia (1, "Viga U", "6''")
    ]