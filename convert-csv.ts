import { Prisma } from '@prisma/client';
import * as csvParser from 'csv-parser';
import { addDays } from 'date-fns';
import * as fs from 'fs';

interface IProduct {
  name: string;
  dias_para_vencimento: number;
}

export default async function main(): Promise<Prisma.ProductCreateInput[]> {
  const records: Prisma.ProductCreateInput[] = [];

  const json = (await new Promise(function (resolve, reject) {
    fs.createReadStream('./produtos.csv')
      .pipe(csvParser())
      .on('data', (data: IProduct) => {
        const product = {
          name: data.name.toLowerCase(),
          due_date:
            data.dias_para_vencimento > 0
              ? addDays(new Date(), data.dias_para_vencimento)
              : new Date(),
        };

        records.push(product);
      })
      .on('end', () => resolve(records))
      .on('error', reject);
  })) as Prisma.ProductCreateInput[];

  return json;
}

main()
  .catch((e) => {
    console.error('Error convert file', e);
    process.exit(1);
  })
  .finally(async () => {
    console.info('file converted successfully');
  });
