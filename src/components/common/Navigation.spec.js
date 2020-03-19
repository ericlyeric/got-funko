import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './Navigation';

describe('Navigation component', () => {
  it('should have all navigation buttons', () => {
    const wrapper = shallow(<Navigation />);
    expect(wrapper.find('#homepage')).toHaveLength(1);
  });
});
