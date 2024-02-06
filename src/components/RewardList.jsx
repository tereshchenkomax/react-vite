import React from 'react';
import PropTypes from 'prop-types';

function RewardList({ points }) {
  return (
    <>
      <h2>Reward Points</h2>
      <table>
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Total Points</th>
            <th>Points by Month</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: 'left' }}>
          {Object.entries(points).map(([customerId, rewardData]) => (
            <tr key={customerId}>
              <td>{customerId}</td>
              <td>{rewardData.total}</td>
              <td>
                {Object.entries(rewardData.monthly).map(
                  ([month, points], index) => (
                    <div key={index}>{`Month ${
                      parseInt(month, 10) + 1
                    }: ${points}`}</div>
                  ),
                )}
              </td>
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
