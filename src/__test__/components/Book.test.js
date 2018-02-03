import React from 'react';
import { shallow, mount } from 'enzyme';
import Book from './../../components/Book';

import booksMock from './../__mock__/booksMock';


describe('<Book />', () => {
  const changeBook = jest.fn();
  const wrapper = mount(<Book book={booksMock.books[0]} changeBook={changeBook} />);

  it('shallow renders without crashing', () => {
    expect(shallow(<Book book={booksMock.books[0]} changeBook={jest.fn()} />))
  });

  it('snapshot Book', () => {
    expect(shallow(<Book book={booksMock.books[0]} changeBook={jest.fn()} />)).toMatchSnapshot()
  });

  it('verify options', () => {
    expect(wrapper.find('option').length).toBe(5);
  });

  it('verify selected option', () => {
    expect(wrapper.find('select').props().value).toBe('read');
  });

  it('modify option', () => {
    wrapper.find('select').simulate('change', { target: { value: 'currentlyReading' }});
    expect(changeBook).toHaveBeenCalledTimes(1)
  });
})
