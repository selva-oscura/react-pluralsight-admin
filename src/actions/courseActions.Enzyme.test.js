import expect from 'expect';
import * as courseActions  from './courseActions';
import * as types from './actionTypes';

// Test a sync action
describe('Course Actions', () => {

	describe('createCourseSuccess', () => {
		it('should create a CREATE_COURSE_SUCCESS action', () => {
			// course information
			const course = {id: 'clean-code', title: 'Clean Code'};
			// expected output
			const expectedAction = {
				type: types.CREATE_COURSE_SUCCESS,
				course: course
			};
			// call to create action
			const action = courseActions.createCourseSuccess(course);
			// assert
			expect(action).toEqual(expectedAction);
		});
	});
	
	describe('updateCourseSuccess', () => {
		it('should create a UPDATE_COURSE_SUCCESS action', () => {
			// course information
			const initialState = [
				{id: 'A', title: "A"},
				{id: 'B', title: "B"},
				{id: 'C', title: "C"}
			];

			// updates
			const updatedTitle = 'B2: the return of B';
			const courseToUpdate = {id: 'B', title: updatedTitle};

			// expected output
			const expectedAction = {
				type: types.UPDATE_COURSE_SUCCESS,
				course: courseToUpdate
			};

			// call to create action
			const action = courseActions.updateCourseSuccess(courseToUpdate);
			// assert for action
			expect(action).toEqual(expectedAction);
		});
	});
	
});

