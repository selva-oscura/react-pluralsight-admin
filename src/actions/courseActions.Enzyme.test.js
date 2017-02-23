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
});