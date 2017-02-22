import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import CourseForm from './CourseForm';

function setup(saving) {
	const props = {
		course: {}, saving: saving, errors: {},
		onSave: () => {},
		onChange: () => {}
	};
	return shallow(<CourseForm {...props} />);
}

describe('CourseForm via Enzyme', () => {
	it('renders form', () => {
		const wrapper = setup();
		expect(wrapper.find('form').length).toBe(1);
	});

});