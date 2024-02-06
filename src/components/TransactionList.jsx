import PropTypes from 'prop-types';

function TransactionList({ transactions }) {
  return (
    <>
      <h2>Transaction List</h2>
      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Transaction Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: 'left' }}>
          {transactions.map(transaction => (
            <tr key={transaction.customerId + transaction.date}>
              <td>{transaction.customerId}</td>
              <td>${transaction.amount.toFixed(2)}</td>
              <td>{new Date(transaction.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

TransactionList.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      customerId: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionList;
