import './utils/module.alias'
import express from 'express'
import { productsRoutes } from './routes/products.routes'

const app = express()

app.use(express.json())
app.use('/products', productsRoutes)

app.listen(3333, () => {
  console.log('server is running on port 3333. enjoy! 🚀')
})
