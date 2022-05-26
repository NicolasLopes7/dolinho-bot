import { getUSD } from '../../src/service/api';

describe('Get BRL <-> USD Rate', () => {
  it('Should return a number', async () => {
    const USD = await getUSD();

    expect(isNaN(USD)).toBe(false);
  });
});
