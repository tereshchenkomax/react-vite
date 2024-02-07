import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TransactionList from './TransactionList';
import { transactionsMock } from '../../../mocks/transactions.mock';

describe('TransactionList', () => {
  it('renders a list of transactions', () => {
    render(<TransactionList transactions={transactionsMock} />);

    expect(screen.getByText('Transaction ID')).toBeInTheDocument();
    expect(screen.getByText('Customer')).toBeInTheDocument();
    expect(screen.getByText('Transaction Amount')).toBeInTheDocument();
    expect(screen.getByText('Date')).toBeInTheDocument();
    screen.logTestingPlaygroundURL();

    expect(
      screen.getByRole('row', {
        name: /txn1 user1 \$120\.00 1\/15\/2023/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('row', {
        name: /txn3 user1 \$200\.00 2\/10\/2023/i,
      }),
    ).toBeInTheDocument();
  });
});
