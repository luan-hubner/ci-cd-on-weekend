import { CreateProduct } from '@src/application/use-cases/products/create-product/create-product';
import { Controller } from '@src/presentation/protocols/controller';
import { HttpRequest, HttpResponse } from '@src/presentation/protocols/http';

export class CreateProductController implements Controller {
  constructor(private readonly createProduct: CreateProduct) {}

  async handle(_: HttpRequest): Promise<HttpResponse> {
    try {
      const { product } = await this.createProduct.execute();

      return {
        statusCode: 201,
        body: { product },
      };
    } catch (_error) {
      return {
        statusCode: 500,
        body: {
          message: 'someting went wrong while creating product :(',
        },
      };
    }
  }
}
