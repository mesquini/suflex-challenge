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

  it('/ (GET)', () => {
    const data = {
      message: 'Suflex API - ' + `${process.env.NODE_ENV}`.toUpperCase(),
      status: 'OK',
      version: process.env.npm_package_version,
    };

    return request(app.getHttpServer()).get('/').expect(200).expect(data);
  });
});
