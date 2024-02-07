import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import RewardList from './RewardList';

describe('RewardList', () => {
  it('should import PropTypes from "prop-types"', () => {
    expect(PropTypes).toBeDefined();
  });

  it('renders correctly with points prop', () => {
    const points = {
      customer1: {
        total: 120,
        monthly: { 0: 30, 1: 40, 2: 50 },
      },
      customer2: {
        total: 200,
        monthly: { 0: 60, 1: 70, 2: 70 },
      },
    };

    const { getByText } = render(<RewardList points={points} />);

    expect(getByText('Reward Points')).toBeInTheDocument();

    expect(getByText('customer1')).toBeInTheDocument();
    expect(getByText('customer2')).toBeInTheDocument();

    expect(getByText('30')).toBeInTheDocument();
    expect(getByText('40')).toBeInTheDocument();
    expect(getByText('50')).toBeInTheDocument();
    expect(getByText('120')).toBeInTheDocument();

    expect(getByText('60')).toBeInTheDocument();
    expect(getByText('200')).toBeInTheDocument();
  });
});
