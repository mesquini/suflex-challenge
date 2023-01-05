import { PrismaClient } from '@prisma/client';
import convertCsv from '../convert-csv';

const prisma = new PrismaClient({});

async function main() {
  const json = await convertCsv();

  await prisma.product.createMany({
    data: json,
    skipDuplicates: true,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
