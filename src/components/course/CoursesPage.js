import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			course: { title: "" }
		};
		this.onTitleChange = this.onTitleChange.bind(this);
		this.onClickSave = this.onClickSave.bind(this);
	}
	onTitleChange(e) {
		const course = this.state.course;
		course.title = e.target.value;
		this.setState({course: course});
	}
	onClickSave() {
		// alert(`Saving ${this.state.course.title}`);
		this.props.createCourse(this.state.course);
	}
	courseRow(course, index) {
		return <div key={index}>{course.title}</div>;
	}
	render() {
		return (
			<div>
				<h1>Courses</h1>
				{this.props.courses.map(this.courseRow)}
				<h2>Add Courses</h2>
				<input 
					type="text"
					onChange={this.onTitleChange}
					value={this.state.course.title}
				/>
				<input 
					type="submit"
					value="Save"
					onClick={this.onClickSave}
				/>
			</div>
		);
	}
}

CoursesPage.propTypes = {
	createCourse: PropTypes.func.isRequired,
	courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		courses: state.courses
	};
}

function mapDispatchToProps(dispatch){
	return {
		createCourse: (course) => dispatch(courseActions.createCourse(course))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);


// normally would have mapStateToProps and mapDispatchToProps both being passed to connect
// mapDispatchToProps lets us specify what actions to expose to our component, 
//  mapDispatchToProps is optional and if we omit it, connect automatically gets a dispatch property attached to it, injected by connect, as is done currently in the code above 
// => allows us to fire off our actions

// export default connect(mapStateToProps)(CoursesPage);
