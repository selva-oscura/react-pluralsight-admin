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
		this.updateCourseState = this.updateCourseState.bind(this);
		this.saveCourse = this.saveCourse.bind(this);
	}

	updateCourseState(e) {
		const field = e.target.name;
		let course = this.state.course;
		course[field] = e.target.value;
		return this.setState({course: course})
	}

	saveCourse(e) {
		e.preventDefault();
		this.props.actions.saveCourse(this.state.course);
		this.context.router.push('/courses');
	}

	render() {
		return (
			<div>
				<h1>Manage Course</h1>
				<CourseForm 
					course={this.state.course}
					allAuthors={this.props.authors}
					onSave={this.saveCourse}
					onChange={this.updateCourseState}
					errors={this.state.errors}
				/>
			</div>
		);
	}
}

ManageCoursePage.propTypes = {
	course: PropTypes.object.isRequired,
	authors: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};

// context - global variable and we should generally avoid global cariables, but they are sometimes useful for easy access to the data we need without having to write boiler-plate router code
ManageCoursePage.contextTypes = {
	router: PropTypes.object.isRequired
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
