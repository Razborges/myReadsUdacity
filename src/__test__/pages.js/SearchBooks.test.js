import React from 'react'
import { shallow, mount } from 'enzyme';
import SearchBooks from './../../pages/SearchBooks'


describe('<SearchBooks />', () => {
  it('shallow renders without crashing', () => {
    expect(shallow(<SearchBooks />))
  })
})