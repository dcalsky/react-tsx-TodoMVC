/// <reference path="../interfaces.d.ts" />
import * as React from 'react';

interface FooterProps {
	todoCount: number,
	filterTodos(f: Filter): void
	clearCompletedTodos(): void
}

interface FooterState {
	filter: Filter
}

export default class Footer extends React.Component<FooterProps, FooterState> {
	state = {
		filter: Filter.ALL
	}
	constructor(props: any) {
		super(props)
	}
	handleChangeStatus = (filter: Filter): void => {
		this.setState({
			filter: filter
		})
		this.props.filterTodos(filter)
	}
  render() {
    return (
			<footer className="footer">
				<span className="todo-count"><strong>{this.props.todoCount}</strong> item left</span>
				<ul className="filters">
					<li>
						<a className={this.state.filter === Filter.ALL ? 'selected' : ''} href="#" onClick={this.handleChangeStatus.bind(this, Filter.ALL)}>All</a>
					</li>
					<li>
						<a className={this.state.filter === Filter.ACTIVE ? 'selected' : ''} href="#" onClick={this.handleChangeStatus.bind(this, Filter.ACTIVE)}>Active</a>
					</li>
					<li>
						<a className={this.state.filter === Filter.COMPLETED ? 'selected' : ''} href="#" onClick={this.handleChangeStatus.bind(this, Filter.COMPLETED)}>Completed</a>
					</li>
				</ul>
				<button className="clear-completed" onClick={this.props.clearCompletedTodos}>Clear completed</button>
			</footer>
    )
  }
}
