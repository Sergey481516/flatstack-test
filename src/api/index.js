import RequestError from './RequestError';

const Api = {
  fetch(url, options = {}) {
    return fetch(url, options)
      .then((res) => {
        const body = res.json();

        if (!res.ok) {
          throw new RequestError('Request error', body);
        }

        return body;
      })
      .then((data) => data);
  },
  SEND_ORDER_FORM: '/order',
};

export default Api;
