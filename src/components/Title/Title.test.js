import React from 'react';
import Title from './Title';

const setup = (propsOverride = {}) => {
  const props = {
    children: 'title',
  };

  return mount(<Title {...props} {...propsOverride} />);
};

describe('<Title />', () => {
  it('should render rightly tag', () => {
    expect(
      setup()
        .find('h1')
        .exists()
    ).toBeTruthy();
    expect(
      setup({ level: 4 })
        .find('h4')
        .exists()
    ).toBeTruthy();
  });

  it('should render sub title', () => {
    const wrapper = setup({
      subTitle: 'sub title',
    });

    expect(wrapper.find('.title__sub').exists()).toBeTruthy();
    expect(wrapper.find('.title__sub').text()).toBe('sub title');
  });
});
