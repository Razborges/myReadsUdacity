import React from 'react'
import { shallow, mount } from 'enzyme';
import Book from './../../components/Book'

import booksMock from './../__mock__/booksMock'


describe('<Book />', () => {
  it('shallow renders without crashing', () => {
    expect(shallow(<Book book={booksMock.books[0]} changeBook={jest.fn()} />))
  })
})