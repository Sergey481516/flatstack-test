import fetchMock from 'fetch-mock';

fetchMock.post('/order', () => ({
  estimatedDate: 'Friday 1st April 2016',
  orderNumber: 188787788,
}));
