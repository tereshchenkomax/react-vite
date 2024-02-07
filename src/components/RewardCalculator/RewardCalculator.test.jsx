import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import RewardCalculator from './RewardCalculator';
import { fetchTransactions } from '../../services/api';

vi.mock('../../services/api', () => ({
  fetchTransactions: vi.fn(),
}));
vi.mock('../../assets/react.svg', () => ({ default: 'reactLogo' }));

describe('RewardCalculator', () => {
  it('displays loading indicator when fetching data', async () => {
    fetchTransactions.mockResolvedValueOnce([]);
    render(<RewardCalculator />);
    expect(screen.getByAltText('React logo')).toBeInTheDocument();
  });

  it('displays error message when fetch fails', async () => {
    const errorMessage = 'Failed to fetch';
    fetchTransactions.mockRejectedValueOnce(new Error(errorMessage));
    render(<RewardCalculator />);
    expect(
      await screen.findByText(`Error: ${errorMessage}`),
    ).toBeInTheDocument();
  });

  it('renders TransactionList and RewardList components with fetched data', async () => {
    const mockTransactions = [
      {
        transactionId: 't1',
        customerId: 'c1',
        amount: 100,
        date: '2021-01-01',
      },
      {
        transactionId: 't2',
        customerId: 'c2',
        amount: 200,
        date: '2021-02-01',
      },
    ];

    fetchTransactions.mockResolvedValue(mockTransactions);

    render(<RewardCalculator />);

    expect(await screen.findByText('Transaction List')).toBeInTheDocument();
    expect(await screen.findByText('Reward Points')).toBeInTheDocument();
  });
});
