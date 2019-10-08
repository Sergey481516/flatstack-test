import React from 'react';
import sinon from 'sinon';
import { BrowserRouter as Router } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';

const setup = (propsOverride) => {
  const props = {
    items: [
      {
        id: 1,
        link: '/',
        label: 'First',
      },
      {
        id: 2,
        link: '/second',
        label: 'Second',
      },
    ],
  };

  // eslint-disable-next-line no-undef
  return mount(
    <Router>
      <Breadcrumbs {...props} {...propsOverride} />
    </Router>
  );
};

describe('<Breadcrumbs />', () => {
  it('should render rightly', () => {
    const wrapper = setup();

    expect(wrapper.find('.breadcrumbs').exists()).toBeTruthy();
    expect(wrapper.find('.breadcrumbs__item').length).toBe(2);
  });

  it('should call click by element', () => {
    const onClick = sinon.spy();
    const wrapper = setup({
      activeId: 2,
      onClick,
    });

    wrapper
      .find('.breadcrumbs__item')
      .first()
      .simulate('click');
    expect(onClick.called).toBeTruthy();
  });
});
