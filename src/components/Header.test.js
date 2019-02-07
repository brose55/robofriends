import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header.js';

it('expect to render Header component', () => {
	expect(shallow(<Header />)).toMatchSnapshot();
});
