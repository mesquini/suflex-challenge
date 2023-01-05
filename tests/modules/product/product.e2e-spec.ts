import { AppModule } from './../../../src/app.module';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/product/due-date (GET)', () => {
    return request(app.getHttpServer())
      .get('/product/due-date')
      .expect(200)
      .expect('Hello World!');
  });
});
