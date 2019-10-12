import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from '../../actions/fetch';

const useFetch = (url, mappingOptions = {}, mapper) => {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);

  const onSuccess = (data) => {
    setData(typeof mapper === 'function' ? mapper(data) : data);
  };

  const onFetch = useCallback(
    (url, mappingOptions) => {
      dispatch(
        fetchData({
          url,
          mappingOptions,
          onSuccess,
        })
      );
    },
    [dispatch]
  );

  useEffect(() => {
    if (url) {
      onFetch(url, mappingOptions);
    }
  }, [onFetch]);

  return {
    data,
    onFetch,
  };
};

export default useFetch;
