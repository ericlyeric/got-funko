import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './Navigation';

describe('Navigation component', () => {
  it('should have login button', () => {
    const wrapper = shallow(<Navigation />);
    expect(wrapper.find('#login-button').text()).toBe('Login');
  });
});
