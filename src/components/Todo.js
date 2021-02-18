import React, { Component } from 'react';

export class Todo extends Component {
	render() {
		return (
			<div>
				<h2
					style={{
						textAlign: 'left',
						backgroundColor: '#f3f3f3',
						paddingLeft: 20,
						textDecoration: this.props.todo.isChecked
							? 'line-through'
							: 'none',
					}}
				>
					<input
						type="checkbox"
						style={{ marginRight: 20 }}
						// onChange={this.props.toggleChecked.bind(
						// 	this,
						// 	this.props.todo.id,
						// )}
					/>
					{this.props.todo.task}
				</h2>
			</div>
		);
	}
}

export default Todo;
