import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import ManageCoursePage from './ManageCoursePage';

describe('ManageCoursePage via Enzyme', () => {
	it('sets error message when trying to save empty title', () => {
		const wrapper=mount(<ManageCoursePage />);
	});
});
