import React, { Component } from 'react';

export class AddToDo extends Component {
	render() {
		return (
			<div>
				<form>
					<input type="text" placeholder="Enter a task" />
					<button type="submit">Add ToDo</button>
				</form>
			</div>
		);
	}
}

export default AddToDo;
