import React from 'react';

import OrderPage from '../pages/OrderPage';

const routes = [
  {
    path: '/',
    render: (props) => <OrderPage {...props} />,
  },
];

export default routes;
