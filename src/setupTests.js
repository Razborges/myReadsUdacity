import "raf/polyfill";

import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

const localStorageMock = {
    get: jest.fn(),
    getAll: jest.fn(),
    search: jest.fn(),
    update: jest.fn()
};

global.localStorage = localStorageMock;

Enzyme.configure({ adapter: new Adapter() })
