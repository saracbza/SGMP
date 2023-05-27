import Produto_materiaPrima from "./Produto_materiaPrima.js"
import Materia from "./Materia.js"
import Produto from "./Produto.js"


Materia.belongsToMany(Produto, { through: Produto_MP, as: 'produto' })
Produto.belongsToMany(Materia, { through: Produto_MP, as: 'materia' })

export { Materia, Produto_materiaPrima, Produto }