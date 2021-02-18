import React, { Component } from 'react';

export class Todo extends Component {
	render() {
		return (
			<div>
				<h2
					style={{
						textAlign: 'left',
						backgroundColor: '#f3f3f3',
						padding: '20px 30px',
						textDecoration: this.props.todo.isChecked
							? 'line-through'
							: 'none',
					}}
				>
					<input
						type="checkbox"
						style={{ marginRight: 20 }}
						onClick={this.props.toggleChecked.bind(
							this,
							this.props.todo.id,
						)}
					/>
					{this.props.todo.task}
					<button
						style={{
							float: 'right',
							border: 'solid 1px',
							backgroundColor: 'red',
							padding: '7px 11px',
							borderRadius: '50%',
							fontWeight: 'bolder',
						}}
						onClick={this.props.deleteToDo.bind(this, this.props.todo.id)}
					>
						X
					</button>
				</h2>
			</div>
		);
	}
}

export default Todo;
