import React from 'react';
import { shallow, mount } from 'enzyme';
import BookList from './../../components/BookList';

import booksMock from './../__mock__/booksMock';


describe('<BookList />', () => {
  it('shallow renders without crashing', () => {
    expect(shallow(<BookList books={booksMock.books} changeBook={jest.fn()} />))
  });

  it('snapshot BookList', () => {
    expect(shallow(<BookList books={booksMock.books} changeBook={jest.fn()} />)).toMatchSnapshot();
  });
})
