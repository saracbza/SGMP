import { Materia, getAllMat, create } from "../models/Materia.js"

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
}



export default MateriaController