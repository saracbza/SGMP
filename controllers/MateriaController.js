import { Materia, getAllMat, create, findByPk, } from "../models/Materia.js"

class MateriaController {
    static list (req,res){
        res.json(getAllMat())
    }

    static createMateria(req,res){
    const {cod, desc,dimensoes} = req.body
    if(!cod || !desc || !dimensoes){
        res.status(400).json({error: "Informe todos os campos!"})
        return
    }

    const materia = new Materia(2,desc,dimensoes)
    const createdMateria = create(materia)
    res.status(201).json(createdMateria)
}

    static getMateriaById(req, res) {
        const cod = parseInt(req.params.cod)
        const Materia  = findByPk(cod)
        if(!Materia) {
            res.status(404).json({ error: 'Matéria não encontrada' })
            return
        }
        res.json(Materia)
    }
}

export default MateriaController