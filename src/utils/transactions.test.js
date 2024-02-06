import { calculatePoints, calculateRewards } from './transactions';

describe('calculateRewards', () => {
  test('returns 0 if price is less than 50', () => {
    expect(calculateRewards(49)).toBe(0);
  });

  test('subtracts 50 if price is between 50 and 100', () => {
    expect(calculateRewards(75)).toBe(25);
  });

  test('calculates correctly if price is over 100', () => {
    expect(calculateRewards(120)).toBe(90);
  });
});

describe('calculatePoints', () => {
  test('calculates customer rewards for multiple transactions', () => {
    const transactions = [
      { customerId: 'user1', amount: 120, date: '2023-01-15T08:30:00.000Z' },
      { customerId: 'user2', amount: 75, date: '2023-01-20T14:45:00.000Z' },
    ];
    const expectedRewards = {
      user1: { total: 90, monthly: { 0: 90 } }, // January is month 0
      user2: { total: 25, monthly: { 0: 25 } },
    };
    expect(calculatePoints(transactions)).toEqual(expectedRewards);
  });

  test('aggregates rewards correctly across multiple months', () => {
    const transactions = [
      { customerId: 'user1', amount: 90, date: '2023-01-01T00:00:00.000Z' },
      { customerId: 'user1', amount: 110, date: '2023-02-01T00:00:00.000Z' },
      { customerId: 'user1', amount: 130, date: '2023-03-01T00:00:00.000Z' },
    ];
    const expectedRewards = {
      user1: {
        total: 180, // 40 + 70 + 70
        monthly: {
          0: 40, // January is month 0
          1: 70, // February is month 1
          2: 70, // March is month 2
        },
      },
    };
    expect(calculatePoints(transactions)).toEqual(expectedRewards);
  });
});
