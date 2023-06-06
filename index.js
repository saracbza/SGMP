import express from 'express'
import cors from "cors"
import db from "./db.js"
import ProdutoRouter from './routes/ProdutoRoutes.js'
import MateriaRouter from './routes/MateriaRoutes.js'
import Produto_MPRouter from './routes/Produto_MPRoutes.js'

const app = express()
app.use(cors())
app.use(express.json())

db.sync()

app.use('/produtos', ProdutoRouter)
app.use('/materias-primas', MateriaRouter)
app.use('/prod-mp', Produto_MPRouter)

const port = process.env.PORT || 3000

app.listen(port, () => {console.log(`API rodando na porta ${port}!`)})