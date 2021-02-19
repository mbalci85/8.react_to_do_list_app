import React, { Component } from 'react';
import { uuid } from 'uuidv4';
import './App.css';
import AddToDo from './components/AddToDo';
import Todos from './components/Todos';

export class App extends Component {
	state = {
		todos: [
			{
				id: uuid(),
				task: 'Go',
				isChecked: false,
			},
			{
				id: uuid(),
				task: 'Do',
				isChecked: false,
			},
			{
				id: uuid(),
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

	addToDo = (task) => {
		const newTask = {
			id: uuid(),
			task,
			isChecked: false,
		};
		this.setState({
			todos: task !== '' ? [...this.state.todos, newTask] : this.state.todos,
		});
		console.log(newTask.id);
	};

	render() {
		return (
			<div className="App">
				<h1>TODO LIST</h1>
				<AddToDo addToDo={this.addToDo} />
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
