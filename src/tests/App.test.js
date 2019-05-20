import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';

describe('Main Component', () => {
  it('renders without crashing', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
});
