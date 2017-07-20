import * as React from 'react';
import { Todo, TodoStatus } from '../Todo';


interface MainProps {
  todos: Todo[]
}

export default class Main extends React.Component<MainProps, {}> {
  render() {
    return (
			<section className="main">
				<input id="toggle-all" className="toggle-all" type="checkbox" />
				<label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {this.props.todos.map((todo, index) => {
            return (
              <li key={index} className={todo.status == TodoStatus.completed ? 'completed' : ''}>
                <div className="view">
                  <input className="toggle" type="checkbox" checked={todo.selected} />
                  <label>{todo.val}</label>
                  <button className="destroy" ></button>
                </div>
                <input className="edit" value="Create a TodoMVC template" />
              </li>
            )
          })}

					<li>
						<div className="view">
							<input className="toggle" type="checkbox" />
							<label>Buy a unicorn</label>
							<button className="destroy"></button>
						</div>
						<input className="edit" value="Rule the web" />
					</li>
				</ul>
			</section>
    )
  }
}