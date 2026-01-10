export class CreateProduct {
  constructor() {}

  async execute(): Promise<any> {
    return {
      product: {
        id: 'random-id',
      },
    }
  }
}
