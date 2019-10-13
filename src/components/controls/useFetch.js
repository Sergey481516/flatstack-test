import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from '../../actions/fetch';

const useFetch = (url, mappingOptions = {}, mapper) => {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);

  const onSuccess = (data) => {
    setData(typeof mapper === 'function' ? mapper(data) : data);
  };

  const onFetch = (url, mappingOptions) => {
    dispatch(
      fetchData({
        url,
        mappingOptions,
        onSuccess,
      })
    );
  };

  useEffect(() => {
    if (url) {
      onFetch(url, mappingOptions);
    }
  }, []);

  return {
    data,
    onFetch,
  };
};

export default useFetch;
