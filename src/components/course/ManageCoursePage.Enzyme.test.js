import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {ManageCoursePage} from './ManageCoursePage';

describe('ManageCoursePage via Enzyme', () => {
	it('sets error message when trying to save empty title', () => {
		// define props to be passed
		const props = {
			authors: [],
			actions: { saveCourse: () => {return Promise.resolve(); }},
			course: {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''}
		};
		// define wrapper
		const wrapper=mount(<ManageCoursePage {...props} />);

		// define saveButton
		const saveButton = wrapper.find('input').last();

		// check type of saveButton
		expect(saveButton.prop('type')).toBe('submit');

		// simulate click
		saveButton.simulate('click');
		expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
	});
});
