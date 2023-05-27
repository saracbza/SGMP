import { Sequelize } from "sequelize"
import db from "../db.js"

const Produto_materiaPrima = db.define('produto_materiaPrima', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },    
    codProd: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    codMateria: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

export default Produto_materiaPrima