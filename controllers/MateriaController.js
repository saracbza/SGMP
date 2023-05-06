import { getAllMat } from "../models/Materia.js"

class MateriaController {
    static list (req,res){
        res.json(getAllMat())
    }
}

export default MateriaController