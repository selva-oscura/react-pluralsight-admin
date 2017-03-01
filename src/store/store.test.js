import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as courseActions from '../actions/courseActions';

describe('Store', () => {
	it('should handle creating courses', () => {
		// arrange
		const store = createStore(rootReducer, initialState);
		const course1 = {
			id: 'cc',
			title: 'Clean Code'
		};
		const course2 = {
			id: 'rl',
			title: 'React for Luddites'
		};

		// act
		const courses = [course1, course2];
		courses.forEach((course) => {
			const action = courseActions.createCourseSuccess(course);
			store.dispatch(action);
		});
		const actuals = store.getState().courses;
		const actual1 = store.getState().courses[0];
		const actual2 = store.getState().courses[1];

		// assert
		expect(actuals.length).toEqual(courses.length);
	 	expect(actual1).toEqual(course1);
	 	expect(actual2).toEqual(course2);
	});

	it('should handle updating courses', () => {
		// arrange
		const store = createStore(rootReducer, initialState);
		const course1 = {
			id: 'cc',
			title: 'Clean Code'
		};
		const course2 = {
			id: 'rl',
			title: 'React for Luddites'
		};
		const updateFor2 = {
			id: 'rl',
			title: 'React for Logicians'
		}

		// act
		// create two
		const courses = [course1, course2];
		courses.forEach((course) => {
			const action = courseActions.createCourseSuccess(course);
			store.dispatch(action);
		});
		// update one
		const action = courseActions.updateCourseSuccess(updateFor2);
		store.dispatch(action);

		const actuals = store.getState().courses;
		const actual2update = store.getState().courses[1];

		// assert
		// still have two courses
		expect(actuals.length).toEqual(courses.length);
		// name of second course matches the updated value
		expect(actual2update).toEqual(updateFor2);
	});
});