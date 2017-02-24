import expect from 'expect';
import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';

describe('Course Reducer', () => {
	it('should add course when passed CREATE_COURSE_SUCCESS', () => {
		const initialState = [
			{title: 'A'},
			{title: 'B'}
		];
		const newCourse = {title: 'C'};
		const action = actions.createCourseSuccess(newCourse);
		const newState = courseReducer(initialState, action);
		expect(newState.length).toEqual(3);
		expect(newState[0].title).toEqual('A');
		expect(newState[1].title).toEqual('B');
		expect(newState[2].title).toEqual('C');
	});

	it('should update course when passed UPDATE_COURSE_SUCCESS', () => {
		const initialState = [
			{id: 'A', title: 'A'},
			{id: 'B', title: 'B'},
			{id: 'C', title: 'C'},
		];

		const updatingCourse = {id: 'B', title: 'B2: Return of the B'};
		const action = actions.updateCourseSuccess(updatingCourse);

		const newState = courseReducer(initialState, action);
		expect(newState.length).toEqual(3);
	});

});