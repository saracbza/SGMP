import { Sequelize } from "sequelize"
import db from "../db.js"

const Materia = db.define('materia', {
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
    dimensoes: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

export default Materia
