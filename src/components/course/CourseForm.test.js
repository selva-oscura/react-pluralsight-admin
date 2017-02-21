import React from 'react';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setup() {
	let props = {
		course: {}, saving: false, errors: {},
		onSave: () => {},
		onChange: () => {}
	};

	let renderer = TestUtils.createRenderer();
	renderer.render(<CourseForm {...props}/>);
	let output = renderer.getRenderOutput();
	return {
		props, 
		output,
		renderer
	};
}

describe('CourseForm via React Test Utils', () => {
	it('renders form', () => {
		const { output } = setup();
		expect(output.type).toBe('form');
	});

	it('save button is labeled Save when not saving', () => {
		const { output } = setup();
		const submitButton = output.props.children[4];
		expect(submitButton.props.value).toBe('Save');
	});
});