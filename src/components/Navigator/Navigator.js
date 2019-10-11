import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUserPosition } from '../../actions/user';

function Navigator({ children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserPosition());
  }, [dispatch]);
  return children;
}

export default Navigator;
