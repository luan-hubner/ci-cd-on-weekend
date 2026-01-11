import request from 'supertest';
import { app } from '@src/index';

describe('CreateProduct e2e', () => {
  it('GET /products should return 201 and created product', async () => {
    const res = await request(app).get('/products');

    expect(res.status).toBe(201);
    expect(res.body).toBeDefined();
    expect(res.body).toHaveProperty('product');
    expect(res.body.product).toHaveProperty('id', 'random-id');
  });
});
