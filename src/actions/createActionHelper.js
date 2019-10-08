import { createAction } from 'redux-actions';

const payloadMapper = (payload = {}) => payload;

export default (type) => createAction(type, payloadMapper);
