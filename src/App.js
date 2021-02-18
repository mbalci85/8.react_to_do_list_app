import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

export class App extends Component {
	state = {
		todos: [
			{
				id: 1,
				task: 'Go',
				isChecked: false,
			},
			{
				id: 2,
				task: 'Do',
				isChecked: false,
			},
			{
				id: 3,
				task: 'Come',
				isChecked: false,
			},
		],
	};

	toggleChecked = (id) => {
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id === id) {
					todo.isChecked = !todo.isChecked;
				}
				return todo;
			}),
		});
	};

	deleteToDo = (id) => {
		this.setState({
			todos: this.state.todos.filter((todo) => todo.id !== id),
		});
	};

	render() {
		return (
			<div className="App">
				<h1>TODO LIST</h1>
				{this.state.todos.length !== 0 ? (
					<Todos
						todos={this.state.todos}
						toggleChecked={this.toggleChecked}
						deleteToDo={this.deleteToDo}
					/>
				) : (
					<h1
						style={{
							color: 'coral',
							marginTop: 150,
							fontWeight: 'bolder',
						}}
					>
						No Task to Show
					</h1>
				)}
			</div>
		);
	}
}

export default App;
