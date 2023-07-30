import React from "react";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  render() {
    console.log(this.props.tasks);
    return (
      <div>
        {this.props.tasks.map((task) => (
          <Todo toggle={this.props.toggle} key={task.id} task={task} />
        ))}
        <button className="clear" onClick={this.props.clearCompleted}>
          {" "}
          Clear
        </button>
      </div>
    );
  }
}
