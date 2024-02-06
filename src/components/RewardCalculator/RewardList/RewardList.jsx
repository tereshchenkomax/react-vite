import PropTypes from 'prop-types';

function RewardList({ points }) {
  return (
    <>
      <h2>Reward Points</h2>
      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>January Points</th>
            <th>February Points</th>
            <th>March Points</th>
            <th>Total Points</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(points).map(([customerId, rewardData]) => (
            <tr key={customerId}>
              <td>{customerId}</td>
              <td>{rewardData.monthly[0] || 0}</td>
              <td>{rewardData.monthly[1] || 0}</td>
              <td>{rewardData.monthly[2] || 0}</td>
              <td>{rewardData.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

RewardList.propTypes = {
  points: PropTypes.objectOf(
    PropTypes.shape({
      total: PropTypes.number.isRequired,
      monthly: PropTypes.objectOf(PropTypes.number).isRequired,
    }),
  ).isRequired,
};

export default RewardList;
