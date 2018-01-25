import React from 'react'
import { shallow, mount } from 'enzyme';
import BooksApp from './../../pages/BooksApp'

import booksMock from './../__mock__/booksMock'

describe('<BooksApp />', () => {
  it('shallow renders without crashing', () => {
    expect(shallow(<BooksApp books={booksMock.books} changeBook={jest.fn()} />))
  })
})