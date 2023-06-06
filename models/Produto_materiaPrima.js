import { Sequelize } from "sequelize"
import db from "../db.js"
import Produto from "./Produto.js"
import Materia from "./Materia.js"

const Produto_materiaPrima = db.define('produto_materiaPrima', {
    cod: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },    

    quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

export default Produto_materiaPrima