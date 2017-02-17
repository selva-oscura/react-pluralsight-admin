import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component {
	constructor (props, context) {
		super(props, context);
		this.state = {
			course: Object.assign({}, props.course),
			errors: {}
		};
	}
	render() {
		return (
			<div>
				<h1>Manage Course</h1>
				<CourseForm 
					course={this.state.course}
					allAuthors={this.props.authors}
					errors={this.state.errors}
				/>
			</div>
		);
	}
}

ManageCoursePage.propTypes = {
	courses: PropTypes.object.isRequired,
	authors: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
	// dummy data for dev purposes
	let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''}
	const authorsFormattedForDropdown = state.authors.map(author => {
		return {
			value: author.id,
			text: `${author.firstName} ${author.lastName}`
		};
	});

	return {
		course: course,
		authors: authorsFormattedForDropdown
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(courseActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
