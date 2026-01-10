import { Router } from 'express'

const productsRoutes = Router()

productsRoutes.get('/', (_, res) => {
  res.json({ products: [] })
})

export { productsRoutes }
