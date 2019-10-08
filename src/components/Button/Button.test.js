import React from 'react';
import sinon from 'sinon';
import Button from './Button';

const setup = (propsOverride) => {
  const props = {};

  // eslint-disable-next-line no-undef
  return mount(<Button {...props} {...propsOverride} />);
};

describe('<Button />', () => {
  it('should return primary button', () => {
    const wrapper = setup({
      type: 'primary',
    });

    expect(wrapper.find('.button--primary').exists()).toBeTruthy();
  });

  it('should return link button', () => {
    const wrapper = setup({
      type: 'link',
    });

    expect(wrapper.find('.button--link').exists()).toBeTruthy();
  });

  it('should call click', () => {
    const onClick = sinon.spy();
    const wrapper = setup({
      onClick,
    });

    wrapper.find('.button').simulate('click');

    expect(onClick.calledOnce).toBeTruthy();
  });
});
