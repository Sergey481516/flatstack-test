import React from 'react';
import AutoComplete from './AutoComplete';

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
  return mount(<AutoComplete {...props} {...propsOverride} />);
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
