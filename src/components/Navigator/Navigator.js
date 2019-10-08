import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUserPosition } from '../../actions/user';

function Navigator() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserPosition());
  }, []);
  return null;
}

export default Navigator;
