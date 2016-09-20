import React, { PropTypes } from 'react';

import '../css/TaskList.css';

import AddTask from './AddTask';
import Task from './Task';

const propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    dueDate: PropTypes.string,
  })),
  addNewTask: PropTypes.func,
  selectTask: PropTypes.func,
  completeTask: PropTypes.func,
  selectedTaskIndex: PropTypes.number,
};

const defaultProps = {
  tasks: [],
  addNewTask() {},
  selectTask() {},
  completeTask() {},
  selectedTaskIndex: null,
};

export default class TaskList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tasks, addNewTask, completeTask, selectTask, selectedTaskIndex } = this.props;
    return (
      <div className="TaskList">
        <div className="TaskList__title">
          TODO List
        </div>

        <div className="TaskList__add-task">
          <AddTask addNewTask={addNewTask} />
        </div>

        {tasks.map((task, i) => (
          <Task
            key={`task-${i}`}
            title={task.title}
            description={task.description}
            dueDate={task.dueDate}
            completed={task.completed}
            onCompletedChange={() => completeTask(task, i)}
            selected={i === selectedTaskIndex}
            onSelectedChange={() => selectTask(task, i)}
          />
        ))}
      </div>
    );
  }
}

TaskList.propTypes = propTypes
TaskList.defaultProps = defaultProps;
