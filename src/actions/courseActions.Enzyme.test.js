import expect from 'expect';
import * as courseActions  from './courseActions';
import * as types from './actionTypes';

// testing the thunks
import thunk from 'redux-thunk';
// to mock http calls
import nock from 'nock';
// to configure a mock store
import configureMockStore from 'redux-mock-store';

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

// testing thunks
const middlewre = [thunk];
const mockStore = configureMockStore(middlewre);
describe('Async Actions', () => {
	afterEach(() => {
		nock.cleanAll();
	});

	// done in next line is a callback function to Mocha that is done when async work is complete (see lines 83-84 for example of where it is called)
	it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {
			// example of how to call nock (not done here, due to this using a mock API rather than a real website for its data)
			// nock('http://example.com')
			// 	.get('/courses')
			// 	.reply(200, {body: {course: [{id: 1, firstName: 'Cory', lastName: 'House'}] }});
	});
})
