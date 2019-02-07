import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList.js';

it('expect to render Card component', () => {
	const mockRobots = [
		{
			id: 0,
			name: 'Acid Burn',
			email: 'acidburn@hackers.com'
		},
		{
			id: 1,
			name: 'Crash Override',
			email: 'zerocool@hackers.com'
		}
	];
	expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
