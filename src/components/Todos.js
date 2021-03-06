import React, { Component } from 'react';
import Todo from './Todo';

export class Todos extends Component {
	render() {
		return (
			<div>
				{this.props.todos.map((todo) => (
					<Todo
						key={todo.id}
						todo={todo}
						toggleChecked={this.props.toggleChecked}
						deleteToDo={this.props.deleteToDo}
					/>
				))}
			</div>
		);
	}
}

export default Todos;
