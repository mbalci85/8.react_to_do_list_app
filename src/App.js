import React, { Component } from 'react';
import './App.css';

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
	render() {
		return (
			<div className="App">
				<h1>TODO LIST</h1>
			</div>
		);
	}
}

export default App;
