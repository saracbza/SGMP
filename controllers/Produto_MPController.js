import { Materia, Produto, Produto_materiaPrima } from "../models/index.js"

    class Produto_MPController {
        static async index(req, res) {
            try {
                const prod_MP = await Produto_materiaPrima.findAll({ include: 'materias' })
                return res.json(prod_MP)
            } catch (err) {
                return res.status(500).json({ error: err.message })
            }
        }
    static async show(req, res) {
        try {
            const produto = await Produto.findByPk(req.body.cod)
            const prod_MP = await Produto_materiaPrima.findByPk(req.body.cod, { include: 'materias' }, {where: {codProd: produto.cod}})
            return res.json(prod_MP)
        } catch (err) {
            return res.status(500).json({ error: err.message })
        }
    }

    static async store(req, res) {
        try {
            const prod_MP = await Produto_materiaPrima.create(req.body)
            return res.json(prod_MP)
        } catch (err) {
            return res.status(500).json({ error: err.message })
        }
    }

    static async createProd_MP(req, res) {
        try {
            const produto = await Produto.findByPk(req.body.cod)
            const materia = await Materia.findByPk(req.body.cod)
            const newProd_MP = {
                codProd: produto.cod,
                codMateria: materia.cod,
                quantidade: materia.quantidade
            }
            const prod_MP = await Produto_materiaPrima.create(newProd_MP)

            await produto.save()
            return res.json(prod_MP)
        } catch (err) {
            console.log(err)
            return res.status(500).json({ error: err.message })
        }
    }
}
export default Produto_MPController