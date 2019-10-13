import React from 'react';
import Field from './Field';

const setup = (propsOverride) => {
  const props = {
    id: 'testField',
    src: 'Input',
  };

  // eslint-disable-next-line no-undef
  return mount(<Field {...props} {...propsOverride} />);
};

describe('<Field />', () => {
  it('should component render', () => {
    const wrapper = setup();

    expect(wrapper.find('.form-field').exists()).toBeTruthy();
  });

  it('should render label', () => {
    const wrapper = setup({
      label: 'Address',
    });

    expect(wrapper.find('.form-field__label').exists()).toBeTruthy();
    expect(wrapper.find('.form-field__label').text()).toBe('Address');
  });

  it('should render error', () => {
    const wrapper = setup({
      meta: {
        error: 'Required',
        touched: true,
      },
    });

    expect(wrapper.find('.form-field__error').exists()).toBeTruthy();
  });

  it('should render control', () => {
    const wrapper = setup();

    expect(wrapper.find('input').exists()).toBeTruthy();
  });

  it('should render help', () => {
    const wrapper = setup({
      help: 'some help',
    });

    expect(wrapper.find('.form-field__control-help').exists()).toBeTruthy();
    expect(wrapper.find('.form-field__control-help').text()).toBe('some help');
  });
});
