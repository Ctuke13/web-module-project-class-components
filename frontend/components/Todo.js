import React from "react";

export default class Todo extends React.Component {
  render() {
    return (
      <div
        onDoubleClick={() => this.props.toggle(this.props.task.id)}
        className={`task${
          this.props.task.completed ? " completed checked" : ""
        }`}
      >
        <p>{this.props.task.name}</p>
      </div>
    );
  }
}
