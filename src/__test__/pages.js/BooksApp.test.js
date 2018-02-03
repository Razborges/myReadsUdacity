import React from 'react';
import { shallow, mount } from 'enzyme';
import BooksApp from './../../pages/BooksApp';
import { MemoryRouter } from 'react-router-dom';

import booksMock from './../__mock__/booksMock';

describe('<BooksApp />', () => {
  const wrapper = mount(<MemoryRouter><BooksApp books={booksMock.books} changeBook={jest.fn()} /></MemoryRouter>)

  it('shallow renders without crashing', () => {
    expect(shallow(<BooksApp books={booksMock.books} changeBook={jest.fn()} />))
  });

  it('snapshot BooksApp', () => {
    expect(shallow(<BooksApp books={booksMock.books} changeBook={jest.fn()} />)).toMatchSnapshot()
  });

  it('has one BookList component', () => {
    expect(wrapper.find('BookList').length).toBe(1)
  });

  it('has one Link component', () => {
    expect(wrapper.find('Link').length).toBe(1)
  });
})
