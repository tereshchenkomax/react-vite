import { describe, it, expect, vi } from 'vitest';
import { fetchTransactions } from './api';
import { transactionsMock } from '../mocks/transactions.mock';

describe('fetchTransactions', () => {
  it('should resolve with transactionsMock data after a delay', async () => {
    vi.useFakeTimers();
    const promise = fetchTransactions();
    vi.advanceTimersByTime(1500);
    await expect(promise).resolves.toEqual(transactionsMock);
    vi.useRealTimers();
  });
});
