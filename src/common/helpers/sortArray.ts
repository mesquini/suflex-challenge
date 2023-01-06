import { Product } from '@prisma/client';

export function dueDateSort(data: Product[]) {
  return data.sort(
    (a, b) => new Date(a.due_date).getTime() - new Date(b.due_date).getTime(),
  );
}

export function alphabeticalSort(data: Product[]) {
  return data.sort((a, b) => a.name.localeCompare(b.name));
}
