export function calculateRewards(price) {
  if (price >= 50 && price <= 100) {
    return price - 50;
  } else if (price > 100) {
    return 2 * (price - 100) + 50;
  }
  return 0;
}

export function calculatePoints(transactions) {
  const customerRewards = {};

  transactions.forEach(transaction => {
    const { customerId, amount, date } = transaction;
    const rewards = calculateRewards(amount);
    const month = new Date(date).getMonth();

    if (!customerRewards[customerId]) {
      customerRewards[customerId] = { total: 0, monthly: {} };
    }

    customerRewards[customerId].total += rewards;
    customerRewards[customerId].monthly[month] =
      customerRewards[customerId].monthly[month] || 0;
    customerRewards[customerId].monthly[month] += rewards;
  });

  return customerRewards;
}
