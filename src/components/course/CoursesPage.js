import React, {PropTypes} from 'react';

class CoursesPage extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			course: { title: null }
		};
	}
	render() {
		return (
			<div>
				<h1>Courses</h1>
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

export default CoursesPage;
