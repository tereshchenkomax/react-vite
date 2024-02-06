import { transactionsMock } from '../mocks/transactions.mock';

export const fetchTransactions = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(transactionsMock);
    }, 1500);
  });
};
