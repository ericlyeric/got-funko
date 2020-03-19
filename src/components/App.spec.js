import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import HomePage from './homePage/HomePage';
import PageNotFound from './PageNotFound';

describe('App component routing', () => {
  it('should render homepage', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );
    expect(wrapper.find(HomePage)).toHaveLength(1);
    expect(wrapper.find(PageNotFound)).toHaveLength(0);
  });

  it('should render PageNotFound', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/randomlink']}>
        <App />
      </MemoryRouter>,
    );
    expect(wrapper.find(HomePage)).toHaveLength(0);
    expect(wrapper.find(PageNotFound)).toHaveLength(1);
  });
});
