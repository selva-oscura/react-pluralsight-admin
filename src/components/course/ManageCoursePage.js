import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import toastr from 'toastr';

class ManageCoursePage extends React.Component {
	constructor (props, context) {
		super(props, context);
		this.state = {
			course: Object.assign({}, props.course),
			saving: false,
			errors: {}
		};
		this.updateCourseState = this.updateCourseState.bind(this);
		this.saveCourse = this.saveCourse.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.course.id !== nextProps.course.id) {
			this.setState({course: Object.assign({}, nextProps.course)});
		}
	}

	updateCourseState(e) {
		const field = e.target.name;
		let course = this.state.course;
		course[field] = e.target.value;
		return this.setState({course: course});
	}

	saveCourse(e) {
		e.preventDefault();
		this.setState({saving: true});
		this.props.actions.saveCourse(this.state.course)
			.then(() => this.redirect())
			.catch(error => {
				this.setState({saving: false});
				toastr.error(error);
			});
	}

	redirect() {
		this.setState({saving: false});
		toastr.success('Course saved');
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
					saving={this.state.saving}
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

function getCourseById(courses, id) {
	const course = courses.filter(course => course.id === id);
	if (course) return course[0];
	return null;
}

function mapStateToProps(state, ownProps) {
	const courseId = ownProps.params.id;
	let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};
	if (courseId && state.courses.length > 0) {
		course = getCourseById(state.courses, courseId);
	}
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
