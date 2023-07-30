import React from "react";
import TodoList from "./TodoList";
import Form from "./Form";

const tasks = [
  {
    name: "Meditate",
    id: 1,
    completed: false,
  },

  {
    name: "Code",
    id: 2,
    completed: false,
  },
  {
    name: "Wash Dishes",
    id: 3,
    completed: false,
  },

  {
    name: "Workout",
    id: 4,
    completed: false,
  },
];

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: tasks,
    };
  }

  addTask = (e, task) => {
    e.preventDefault();
    const newTask = {
      name: task,
      id: tasks[tasks.length - 1].id + 1,
      completed: false,
    };

    this.setState({
      ...this.state,
      tasks: [...this.state.tasks, newTask],
    });
  };

  toggleTask = (taskId) => {
    console.log(taskId);
    this.setState({
      ...this.state,
      tasks: this.state.tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed };
        }
        return task;
      }),
    });
  };

  clearCompleted = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter((task) => !task.completed),
    });
  };

  render() {
    return (
      <div className="app-container">
        <h2>Todos:</h2>
        <TodoList
          toggle={this.toggleTask}
          tasks={this.state.tasks}
          clearCompleted={this.clearCompleted}
        />

        <Form addTask={this.addTask} />
      </div>
    );
  }
}
