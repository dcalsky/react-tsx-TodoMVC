import { TodoStatus } from '../Todo';
import * as React from 'react';

interface FooterProps {
	todoCount: number,
	filterTodos(status: TodoStatus|string): void
	clearCompletedTodos(): void
}

export default class Footer extends React.Component<FooterProps, {}> {
	state = {
		status: null
	}
	constructor(props: any) {
		super(props)
	}
	componentDidMount() {
		this.setState({
			status: 'all'
		})
	}
	handleChangeStatus = (status: TodoStatus|string): void => {
		this.setState({
			status: status
		})
		this.props.filterTodos(status)
	}
  render() {
    return (
			<footer className="footer">
				<span className="todo-count"><strong>{this.props.todoCount}</strong> item left</span>
				<ul className="filters">
					<li>
						<a className={this.state.status === 'all' ? 'selected' : ''} href="#" onClick={this.handleChangeStatus.bind(this, 'all')}>All</a>
					</li>
					<li>
						<a className={this.state.status === TodoStatus.actived ? 'selected' : ''} href="#" onClick={this.handleChangeStatus.bind(this, TodoStatus.actived)}>Active</a>
					</li>
					<li>
						<a className={this.state.status === TodoStatus.completed ? 'selected' : ''} href="#" onClick={this.handleChangeStatus.bind(this, TodoStatus.completed)}>Completed</a>
					</li>
				</ul>
				<button className="clear-completed" onClick={this.props.clearCompletedTodos}>Clear completed</button>
			</footer>
    )
  }
}
