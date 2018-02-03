import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchBooks from './../../pages/SearchBooks';
import { MemoryRouter } from 'react-router-dom';

import booksMock from './../__mock__/booksMock';

describe('<SearchBooks />', () => {
  const wrapper = mount(
    <MemoryRouter>
      <SearchBooks
        books={ booksMock.books }
        changeBook={ jest.fn() }
      />
    </MemoryRouter>)

  afterEach(() => wrapper.setState({
    search: '',
    resultBooks: [],
    msg: 'You must enter 3 or more characters to search.'
  }));

  it('shallow renders without crashing', () => {
    expect(shallow(<SearchBooks books={ booksMock } changeBook={ jest.fn() } />))
  });

  it('snapshot SearchBooks', () => {
    expect(shallow(<SearchBooks books={ booksMock } changeBook={ jest.fn() } />)).toMatchSnapshot();
  });

  it('initial state search query to empty', () => {
    expect(wrapper.state().search.length).toBe(0)
  });

  it('initial state resultBooks to empty', () => {
    expect(wrapper.state().resultBooks.length).toBe(0)
  });

  it('has DebounceInput component', () => {
    expect(wrapper.find('DebounceInput').length).toBe(1)
  });
})
