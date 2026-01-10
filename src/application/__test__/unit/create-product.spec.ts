import { CreateProduct } from '@src/application/use-cases/products/create-product/create-product'
import { CreateProductController } from '@src/application/use-cases/products/create-product/create-product.controller'

describe('CreateProduct workflow (unit)', () => {
  it('should return 201 and the created product', async () => {
    const createProduct = new CreateProduct()
    const controller = new CreateProductController(createProduct)

    const httpResponse = await controller.handle({})

    expect(httpResponse).toBeDefined()
    expect(httpResponse.statusCode).toBe(201)
    expect(httpResponse.body).toBeDefined()
    const body = httpResponse.body as any
    expect(body).toHaveProperty('product')
    expect(body.product).toHaveProperty('id', 'random-id')
  })
})
