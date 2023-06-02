import Materia from "../models/Materia.js"

class MateriaController {
    static async list(req,res){
        const materias = await Materia.findAll()
        res.json(materias)
    }

    static async createMateria(req,res){
    const {cod, desc,dimensoes} = req.body
    if(!cod || !desc || !dimensoes){
        res.status(400).json({error: "Informe todos os campos!"})
        return
    }

    const createdMateria = await Materia.create({desc,dimensoes})
    res.status(201).json(createdMateria)
}

    static async getMateriaById(req, res) {
        const cod = parseInt(req.params.cod)
        const materia  = await Materia.findByPk(cod)
        if(!materia) {
            res.status(404).json({ error: 'Matéria não encontrada' })
            return
        }
        res.json(materia)
    }

    static async updateMateria (req,res){
        const cod = parseInt(req.params.cod)
        const materia = await Materia.findByPk(cod)
        if(!materia){
            res.status(404).json({error:"Não encontrado"})
            return
        }
    
        const {desc, dimensoes} = req.body
        if(!desc || !dimensoes){
            res.status(400).json({error: "Informe todos os campos!"})
            return
        }
    
        const updatedMateria = await Materia.update({desc, dimensoes},{where: {cod: materia.cod}})
        res.json(updatedMateria)
    }
        
    static async destroyMateria(req,res){
        const cod = parseInt(req.params.cod)
        const materia = await Materia.findByPk(cod)
        if(!materia){
            res.status(404).json({error:"Não encontrado"})
            return
        }
        await Materia.destroy({where: {cod: materia.cod}})
        res.json({message: "Removido com sucesso!"})
    }    

    }
        export default MateriaController