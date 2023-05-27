import Materia from "../models/Materia.js"

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
    static updateMateria (req,res){
        const cod = parseInt(req.params.cod)
        const materia = findByPk(cod)
        if(!materia){
            res.status(404).json({error:"Não encontrado"})
            return
        }
    
        const {desc, dimensoes} = req.body
        if(!desc || !dimensoes){
            res.status(400).json({error: "Informe todos os campos!"})
            return
        }
    
        materia.desc = desc
        materia.dimensoes = dimensoes
    
        update(cod,materia)
        res.json(materia)
    }
        
    static destroyMateria(req,res){
        const cod = parseInt(req.params.cod)
        const materia = findByPk(cod)
        if(!materia){
            res.status(404).json({error:"Não encontrado"})
            return
        }
        destroy(cod)
        res.json({message: "Removido com sucesso!"})
    }    

    }
        export default MateriaController