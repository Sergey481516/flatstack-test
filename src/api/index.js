import RequestError from './RequestError';

const YAPI_KEY = 'efd192fe-2537-4d5a-9686-4d4760dcc68a';

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
  GET_ADDRESS_BY_GEOCODE: `https://geocode-maps.yandex.ru/1.x/?apikey=${YAPI_KEY}&geocode=:coords&format=json&lang=en_RU&results=1`,
  GET_COUNTRIES: 'https://restcountries.eu/rest/v2/all?fields=name',
};

export default Api;
