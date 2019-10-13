import React from 'react';
import { Provider } from 'react-redux';
import AutoComplete from './AutoComplete';

import configureStore from '../../../store';

const store = configureStore();

const setup = (propsOverride) => {
  const props = {
    items: [
      {
        label: 'a',
      },
      {
        label: 'ab',
      },
      {
        label: 'abc',
      },
    ],
  };

  // eslint-disable-next-line no-undef
  return mount(
    <Provider store={store}>
      <AutoComplete {...props} {...propsOverride} />
    </Provider>
  );
};

describe('<AutoComplete />', () => {
  it('should render component', () => {
    expect(
      setup()
        .find('.autocomplete')
        .exists()
    ).toBeTruthy();
  });

  it('should open menu', () => {
    const wrapper = setup();

    expect(wrapper.find('.autocomplete__menu').exists()).toBeFalsy();
    wrapper.find('.autocomplete__input').simulate('focus');
    expect(wrapper.find('.autocomplete__menu').exists()).toBeTruthy();
  });
});
