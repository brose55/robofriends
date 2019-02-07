import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';

import * as reducers from './reducers';

describe('searchRobots', () => {
	const initialStateSearch = {
		searchField: ''
	}
	it('should return initial state', () => {
		expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: ''})
	})

	it('should handle the CHANGE_SEARCHFIELD event', () => {
		expect(reducers.searchRobots(initialStateSearch, {
			type: CHANGE_SEARCHFIELD,
			payload: 'abc'
		})).toEqual({ searchField: 'abc'})
	})
})

describe('requestRobots', () => {
	const initialStateRobots = {
		robots: [],
		isPending: false
	}

	it('should return initial state', () => {
		expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots)
	})

	it('should handle REQUEST_ROBOTS_PENDING', () => {
		expect(reducers.requestRobots(initialStateRobots, {
			type: REQUEST_ROBOTS_PENDING,
		})).toEqual({
			robots: [],
			isPending: true
		})
	})

	it('should handle REQUEST_ROBOTS_SUCCESS', () => {
		expect(reducers.requestRobots(initialStateRobots, {
			type: REQUEST_ROBOTS_SUCCESS,
			payload: [{
				id: '0',
				name: 'Acid Burn',
				email: 'acidburn@hackers.com'
			}]
		})).toEqual({
			robots: [{
				id: '0',
				name: 'Acid Burn',
				email: 'acidburn@hackers.com'
			}],
			isPending: false
		})
	})

	it('should handle REQUEST_ROBOTS_FAILED', () => {
		expect(reducers.requestRobots(initialStateRobots, {
			type: REQUEST_ROBOTS_FAILED,
			payload: 'error'
		})).toEqual({
			error: 'error',
			robots: [],
			isPending: false
		})
	})

})
