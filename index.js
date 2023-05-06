import express from 'express'
import ProdutoRouter from './routes/ProdutoRoutes.js'
import MateriaRouter from './routes/MateriaRoutes.js'

const app = express()
app.use(express.json())

app.use('/produtos', ProdutoRouter)
app.use('/materias-prima', MateriaRouter)
const port = 3000
app.listen(port, () => {console.log(`API rodando na porta ${port}!`)})