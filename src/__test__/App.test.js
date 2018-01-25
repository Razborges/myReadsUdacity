import React from 'react'
import { shallow, mount } from 'enzyme';
import App from './../App'
import { MemoryRouter } from 'react-router-dom'


describe('<App />', () => {
  it('shallow renders without crashing', () => {
    expect(shallow(<App />))
  })

  it('mount renders without crashing', () => {
		expect(mount(<MemoryRouter><App /></MemoryRouter>))
	});
})
