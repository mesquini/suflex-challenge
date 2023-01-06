import { DeepMocked, createMock } from '@golevelup/ts-jest';

import { product1 } from './mocks/product.mock';
import { IGetterProductService } from './../../../src/modules/product/services/interfaces/igetter-product.service';
import { GetterProductService } from './../../../src/modules/product/services/getter-product.service';
import { IProductDao } from './../../../src/modules/product/domain/repositories/interfaces/iproduct.dao';

let productDaoMock: DeepMocked<IProductDao>;

let getterProductService: IGetterProductService;

describe('Getter product', () => {
  beforeAll(() => {
    productDaoMock = createMock<IProductDao>();

    getterProductService = new GetterProductService(productDaoMock);
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('Should be return list alphabetical sort', async () => {
    productDaoMock.listAlphabeticalSort.mockResolvedValue(product1);

    const data = await getterProductService.listAlphabeticalSort({
      perPage: 20,
      page: 1,
    });

    expect(data.data).toHaveLength(20);
  });

  it('Should be return list due date sort', async () => {
    productDaoMock.listDueDateSort.mockResolvedValue(product1);

    await expect(getterProductService.listDueDateSort()).resolves.toEqual(
      product1,
    );
  });
});
