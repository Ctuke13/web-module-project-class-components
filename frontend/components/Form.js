import React from "react";

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({ ...this.state, name: e.target.value });
  };

  submit = (e) => {
    e.preventDefault();
    this.props.addTask(e, this.state.name);
    this.setState({ ...this.state, name: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <input
            onChange={this.handleChange}
            type="text"
            name="task"
            value={this.state.name}
          />
          &nbsp;
          <button>Add Task</button>
        </form>
      </div>
    );
  }
}
