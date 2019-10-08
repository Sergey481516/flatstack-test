import React from 'react';
import { Field as ReduxFormField } from 'redux-form';
import Field from './Field';

function ReduxField(props) {
  return <ReduxFormField {...props} component={Field} />;
}

export default ReduxField;
