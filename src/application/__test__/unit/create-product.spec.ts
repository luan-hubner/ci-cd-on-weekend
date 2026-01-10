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
  it('should return 500 and an error message when use-case throws', async () => {
    class FailingCreateProduct {
      async execute(): Promise<any> {
        throw new Error('boom')
      }
    }

    const createProduct = new FailingCreateProduct()
    const controller = new CreateProductController(createProduct as any)

    const httpResponse = await controller.handle({})

    expect(httpResponse).toBeDefined()
    expect(httpResponse.statusCode).toBe(500)
    const body = httpResponse.body as any
    expect(body).toHaveProperty('message', 'someting went wrong while creating product :(')
  })

  it('should call createProduct.execute once', async () => {
    const executeMock = jest.fn().mockResolvedValue({ product: { id: 'random-id' } })
    const createProduct = { execute: executeMock }
    const controller = new CreateProductController(createProduct as any)

    await controller.handle({})

    expect(executeMock).toHaveBeenCalledTimes(1)
  })
})
