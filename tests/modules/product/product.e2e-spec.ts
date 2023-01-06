import { product2 } from './mocks/product.mock';
import { DITokens } from './../../../src/common/enums/DITokens';
import { AppModule } from './../../../src/app.module';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  const productServiceMock = {
    listDueDateSort: () => product2,
    listAlphabeticalSort: () => product2,
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(DITokens.ProductGetterService)
      .useValue(productServiceMock)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/product/due-date (GET)', () => {
    return request(app.getHttpServer())
      .get('/product/due-date')
      .query({
        dueDate: 2,
      })
      .then((result) => {
        expect(result.statusCode).toEqual(200);
        expect(result.body.data.length).toEqual(1);
        expect(result.body).toEqual(productServiceMock.listDueDateSort());
      });
  });

  it('/product/alphabetical (GET)', () => {
    return request(app.getHttpServer())
      .get('/product/alphabetical')
      .query({
        page: 1,
        perPage: 10,
      })
      .then((result) => {
        expect(result.statusCode).toEqual(200);
        expect(result.body.data.length).toEqual(1);
        expect(result.body).toEqual(productServiceMock.listAlphabeticalSort());
      });
  });
});
