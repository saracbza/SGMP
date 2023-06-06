import Produto_materiaPrima from "./Produto_materiaPrima.js"
import Materia from "./Materia.js"
import Produto from "./Produto.js"

Materia.belongsToMany(Produto, { through: Produto_materiaPrima, as: "produtos" })
Produto.belongsToMany(Materia, { through: Produto_materiaPrima, as: "materias" })

export { Materia, Produto_materiaPrima, Produto }