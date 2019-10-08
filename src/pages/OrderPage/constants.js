export const FormStageId = {
  SHIPPING: 'shipping',
  BILLING: 'billing',
  PAYMENT: 'payment',
};

export const requiredFields = [
  {
    name: 'shipping.fullName',
    errorName: 'full name',
    errorPrefix: 'recipient',
  },
  {
    name: 'shipping.daytimePhone',
    errorName: 'daytime phone',
    errorPrefix: 'recipient',
  },
  {
    name: 'shipping.street',
    errorName: 'street',
    errorPrefix: 'recipient',
  },
  {
    name: 'shipping.city',
    errorName: 'city',
    errorPrefix: 'recipient',
  },
  {
    name: 'shipping.country',
    errorName: 'country',
    errorPrefix: 'recipient',
  },
  {
    name: 'shipping.zip',
    errorName: 'zip',
    errorPrefix: 'recipient',
  },
  {
    name: 'billing.fullName',
    errorName: 'full name',
    errorPrefix: 'billing contact',
  },
  {
    name: 'billing.street',
    errorName: 'street',
    errorPrefix: 'billing contact',
  },
  {
    name: 'billing.city',
    errorName: 'city',
    errorPrefix: 'billing contact',
  },
  {
    name: 'billing.country',
    errorName: 'country',
    errorPrefix: 'billing contact',
  },
  {
    name: 'billing.zip',
    errorName: 'zip',
    errorPrefix: 'billing contact',
  },
  {
    name: 'payment.cardholder',
    errorName: 'cardholder',
    errorPrefix: 'payment',
  },
  {
    name: 'payment.cardNumber',
    errorName: 'card number',
    errorPrefix: 'payment',
  },
  {
    name: 'payment.expireDate',
    errorName: 'expire date',
    errorPrefix: 'payment',
  },
  {
    name: 'payment.securityCode',
    errorName: 'security code',
    errorPrefix: 'payment',
  },
];
