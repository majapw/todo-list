import React, { Component } from 'react';
import './App.css';

import TaskList from './components/TaskList';
import TaskDetails from './components/TaskDetails';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      selectedTaskIndex: null,
    };

    this.addNewTask = this.addNewTask.bind(this);
    this.completeTask = this.completeTask.bind(this);
    this.selectTask = this.selectTask.bind(this);
  }

  addNewTask(task) {
    const tasks = this.state.tasks.slice();
    tasks.push(task);
    this.setState({
      tasks,
    });
  }

  completeTask(task, i) {
    const tasks = this.state.tasks.slice();
    task[i].completed = true;
    this.setState({
      tasks,
    });
  }

  selectTask(task, i) {
    this.setState({
      selectedTaskIndex: i,
    });
  }

  render() {
    const { tasks, selectedTaskIndex } = this.state;
    return (
      <div className="App">
        <div className="App__left">
          <TaskList
            tasks={tasks}
            addNewTask={this.addNewTask}
            completeTask={this.completeTask}
            selectTask={this.selectTask}
            selectedTaskIndex={selectedTaskIndex}
          />
        </div>

        <div className="App__right">
          <TaskDetails />
        </div>
      </div>
    );
  }
}

export default App;
