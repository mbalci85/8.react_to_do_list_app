import React, { Component } from 'react';

export class AddToDo extends Component {
	state = {
		newTask: '',
	};

	handleInput = (e) => {
		this.setState({
			newTask: e.target.value,
		});
	};

	submit = (e) => {
		e.preventDefault();
		this.props.addToDo(this.state.newTask);
		this.setState({
			newTask: '',
		});
	};
	render() {
		return (
			<div>
				<form onSubmit={this.submit}>
					<input
						type="text"
						placeholder="Enter a task"
						onChange={this.handleInput}
					/>
					<button type="submit">Add ToDo</button>
				</form>
			</div>
		);
	}
}

export default AddToDo;
