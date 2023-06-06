import { Sequelize } from "sequelize"
import db from "../db.js"

const Produto = db.define('produto', {
    cod: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    desc: {
        type: Sequelize.STRING,
        allowNull: false
    },    
    desenho: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

export default Produto
