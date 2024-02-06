import TransactionList from './TransactionList/TransactionList';
import RewardList from './RewardList/RewardList';
import { calculatePoints } from '../../utils/transactions';
import { fetchTransactions } from '../../services/api';
import { useEffect, useState } from 'react';
import reactLogo from '../../assets/react.svg';

export default function RewardCalculator() {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactionData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchTransactions();
        setTransactions(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTransactionData();
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (isLoading) {
    return (
      <img src={reactLogo} className="logo react logo-spin" alt="React logo" />
    );
  }

  return (
    <>
      <TransactionList transactions={transactions} />
      <RewardList points={calculatePoints(transactions)} />
    </>
  );
}
