import axios from 'axios';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { uuid } from 'uuidv4';
import './App.css';
import AddToDo from './components/AddToDo';
import Todos from './components/Todos';
import About from './pages/About';

export class App extends Component {
	state = {
		todos: [
			// {
			// 	id: uuid(),
			// 	title: 'Go',
			// 	completed: false,
			// },
			// {
			// 	id: uuid(),
			// 	title: 'Do',
			// 	completed: false,
			// },
			// {
			// 	id: uuid(),
			// 	title: 'Come',
			// 	completed: false,
			// },
		],
	};

	componentDidMount() {
		axios
			.get('http://jsonplaceholder.typicode.com/todos?_limit=10')
			.then((res) =>
				this.setState({
					todos: res.data,
				}),
			);
	}

	toggleChecked = (id) => {
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
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

	addToDo = (title) => {
		// const newTask = {
		// 	id: uuid(),
		// 	title,
		// 	completed: false,
		// };

		axios
			.post('http://jsonplaceholder.typicode.com/todos', {
				id: uuid(),
				title,
				completed: false,
			})
			.then((res) =>
				this.setState({
					todos:
						title !== ''
							? [...this.state.todos, res.data]
							: this.state.todos,
				}),
			);
	};

	render() {
		return (
			<Router>
				<div className="App">
					<h1>TODO LIST</h1>
					<Link to="/" style={{ textDecoration: 'none' }}>
						Home |{' '}
					</Link>
					<Link to="/about" style={{ textDecoration: 'none' }}>
						About
					</Link>
					<br />
					<br />
					<Route
						path="/"
						exact
						render={(props) => (
							<React.Fragment>
								<AddToDo addToDo={this.addToDo} />
								<br />
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
							</React.Fragment>
						)}
					/>
					<Route path="/about" component={About} />
				</div>
			</Router>
		);
	}
}

export default App;
