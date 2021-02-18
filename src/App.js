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

	// toggleChecked =(id)=> {
	// 	this.setState({
	// 		isChecked:
	// 	})
	// }

	render() {
		return (
			<div className="App">
				<h1>TODO LIST</h1>
				<Todos
					todos={this.state.todos}
					toggleChecked={this.toggleChecked}
				/>
			</div>
		);
	}
}

export default App;
