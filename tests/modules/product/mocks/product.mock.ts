import { Product } from '@prisma/client';
import { PaginatedResult } from 'prisma-pagination';

export const product1: PaginatedResult<Product> = {
  data: [
    {
      id: '74a9bed5-a9bc-4869-930e-0c0178a7d887',
      name: 'morcilla',
      due_date: new Date(new Date('2023-01-06T00:00:00.000Z')),
      created_at: new Date('2023-01-06T00:00:00.000Z'),
      updated_at: new Date('2023-01-06T00:00:00.000Z'),
    },
    {
      id: 'f85d7554-dc3a-4fea-86c3-9256f3b98fc9',
      name: 'mortadela',
      due_date: new Date('2023-01-06T00:00:00.000Z'),
      created_at: new Date('2023-01-06T00:00:00.000Z'),
      updated_at: new Date('2023-01-06T00:00:00.000Z'),
    },
    {
      id: '6eaf5f85-7557-477c-99c9-3bb6fe0cacf1',
      name: 'frutos do mar',
      due_date: new Date('2023-01-06T00:00:00.000Z'),
      created_at: new Date('2023-01-06T00:00:00.000Z'),
      updated_at: new Date('2023-01-06T00:00:00.000Z'),
    },
    {
      id: '1f2d2cac-198c-4fa7-b726-111611d6ebcc',
      name: 'mostarda amarela',
      due_date: new Date('2023-01-06T00:00:00.000Z'),
      created_at: new Date('2023-01-06T00:00:00.000Z'),
      updated_at: new Date('2023-01-06T00:00:00.000Z'),
    },
    {
      id: '9593f9d4-90b4-4329-808f-0d932edec6d7',
      name: 'tomate grape',
      due_date: new Date('2023-01-06T00:00:00.000Z'),
      created_at: new Date('2023-01-06T00:00:00.000Z'),
      updated_at: new Date('2023-01-06T00:00:00.000Z'),
    },
    {
      id: 'dbad99d1-661a-403c-b622-f6fc0b6576d9',
      name: 'mostarda escura',
      due_date: new Date('2023-01-06T00:00:00.000Z'),
      created_at: new Date('2023-01-06T00:00:00.000Z'),
      updated_at: new Date('2023-01-06T00:00:00.000Z'),
    },
    {
      id: 'edc0c605-42ef-4ca9-acd0-a0a70c442926',
      name: 'frios',
      due_date: new Date('2023-01-06T00:00:00.000Z'),
      created_at: new Date('2023-01-06T00:00:00.000Z'),
      updated_at: new Date('2023-01-06T00:00:00.000Z'),
    },
    {
      id: '5a969ee4-85a8-4681-a642-9f51a22c8530',
      name: 'fried rice',
      due_date: new Date('2023-01-06T00:00:00.000Z'),
      created_at: new Date('2023-01-06T00:00:00.000Z'),
      updated_at: new Date('2023-01-06T00:00:00.000Z'),
    },
    {
      id: 'a06e7a33-2871-41a4-87b2-21e7d889464a',
      name: 'vinho tinto seco',
      due_date: new Date('2023-01-06T00:00:00.000Z'),
      created_at: new Date('2023-01-06T00:00:00.000Z'),
      updated_at: new Date('2023-01-06T00:00:00.000Z'),
    },
    {
      id: '8188f4db-b6d9-4b35-add3-76282ce283f3',
      name: 'frangipane',
      due_date: new Date('2023-01-06T00:00:00.000Z'),
      created_at: new Date('2023-01-06T00:00:00.000Z'),
      updated_at: new Date('2023-01-06T00:00:00.000Z'),
    },
    {
      id: '479f5b24-11bd-450a-a904-cea6fbdd0e2c',
      name: 'frangelico',
      due_date: new Date('2023-01-06T00:00:00.000Z'),
      created_at: new Date('2023-01-06T00:00:00.000Z'),
      updated_at: new Date('2023-01-06T00:00:00.000Z'),
    },
    {
      id: '545d85e1-6fb0-4da2-a031-b7817937b64a',
      name: 'fougasse',
      due_date: new Date('2023-01-06T00:00:00.000Z'),
      created_at: new Date('2023-01-06T00:00:00.000Z'),
      updated_at: new Date('2023-01-06T00:00:00.000Z'),
    },
    {
      id: 'b52392c4-3dbd-40cb-8133-d26637624e2c',
      name: 'ameixa seca',
      due_date: new Date('2023-01-06T00:00:00.000Z'),
      created_at: new Date('2023-01-06T00:00:00.000Z'),
      updated_at: new Date('2023-01-06T00:00:00.000Z'),
    },
    {
      id: '9bbeb1b2-5440-4445-b00a-c7d5d5de0231',
      name: 'fontina',
      due_date: new Date('2023-01-06T00:00:00.000Z'),
      created_at: new Date('2023-01-06T00:00:00.000Z'),
      updated_at: new Date('2023-01-06T00:00:00.000Z'),
    },
    {
      id: 'cc713f39-f4da-40f1-aece-e346fc667b4c',
      name: 'fondue',
      due_date: new Date('2023-01-06T00:00:00.000Z'),
      created_at: new Date('2023-01-06T00:00:00.000Z'),
      updated_at: new Date('2023-01-06T00:00:00.000Z'),
    },
    {
      id: '284c1aee-d617-454b-96a2-bd064ffd1454',
      name: 'folha de louro',
      due_date: new Date('2023-01-06T00:00:00.000Z'),
      created_at: new Date('2023-01-06T00:00:00.000Z'),
      updated_at: new Date('2023-01-06T00:00:00.000Z'),
    },
    {
      id: 'c062787c-d4be-49ef-8ae1-00487a577e8e',
      name: 'tomate molho',
      due_date: new Date('2023-01-06T00:00:00.000Z'),
      created_at: new Date('2023-01-06T00:00:00.000Z'),
      updated_at: new Date('2023-01-06T00:00:00.000Z'),
    },
    {
      id: '0b154fa4-e8cd-4377-be62-823c06064d78',
      name: 'folha de gelatina',
      due_date: new Date('2023-01-06T00:00:00.000Z'),
      created_at: new Date('2023-01-06T00:00:00.000Z'),
      updated_at: new Date('2023-01-06T00:00:00.000Z'),
    },
    {
      id: '7825c89d-7808-4ed5-b8a6-9757ffaf9c6f',
      name: 'nam plá',
      due_date: new Date('2023-01-06T00:00:00.000Z'),
      created_at: new Date('2023-01-06T00:00:00.000Z'),
      updated_at: new Date('2023-01-06T00:00:00.000Z'),
    },
    {
      id: '850d45b6-e8fc-4b9a-bddf-d3454d7dee9e',
      name: 'folha de beldroega',
      due_date: new Date('2023-01-06T00:00:00.000Z'),
      created_at: new Date('2023-01-06T00:00:00.000Z'),
      updated_at: new Date('2023-01-06T00:00:00.000Z'),
    },
  ],
  meta: {
    total: 1227,
    lastPage: 62,
    currentPage: 60,
    perPage: 20,
    prev: 59,
    next: 61,
  },
};