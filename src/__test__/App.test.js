import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './../App';
import { MemoryRouter } from 'react-router-dom';

import booksMock from './__mock__/booksMock';


describe('<App />', () => {
  const wrapper = mount(<MemoryRouter><App /></MemoryRouter>)

  afterEach(() => wrapper.setState({
    books: booksMock.books
  }));

  it('shallow renders without crashing', () => {
    expect(shallow(<App />))
  });

  it('snapshot SearchBooks', () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });

  it('initial state books', () => {
    expect(wrapper.state().books.length).toBe(3)
  });
})
