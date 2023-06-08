import Materia from "../models/Materia.js"
import Produto from "../models/Produto.js"
import Produto_materiaPrima from "../models/Produto_materiaPrima.js"

    class Produto_MPController {
    static async show(req, res) {
        try {
            const prod_MP = await Produto_materiaPrima.findByPk(req.params.cod)
            const result = await Produto.findOne({
                where: { cod: prod_MP.cod },
                include: Materia
              })
            return res.json(result)
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
}
export default Produto_MPController