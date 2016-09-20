import React, { PropTypes } from 'react';
import '../css/AddTask.css';

const propTypes = {
  addNewTask: PropTypes.func,
};

const defaultProps = {
  addNewTask() {},
};

export default class AddTask extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addingNewTask: false,
    };

    this.onBlur = this.onBlur.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  componentDidUpdate() {
    if (this.state.addingNewTask && this.input) {
      this.input.focus();
    }
  }

  onBlur() {

    // this.setState({
    //   addingNewTask: false,
    // });
  }

  onKeyDown(e) {
    if (e.key === 'Enter') {
      this.setState({
        addingNewTask: false,
      });

      this.props.addNewTask({
        title: e.target.value,
      });
    }
  }

  addTask() {
    this.setState({
      addingNewTask: true,
    });
  }

  render() {
    return (
      <div className="AddTask" onClick={this.addTask}>
        {this.state.addingNewTask ? (
            <label className="AddTask__new">
              <span className="AddTask__label">New Task:</span>
              <input
                className="AddTask__input"
                ref={ref => { this.input = ref; }}
                type="text"
                onBlur={this.onBlur}
                onKeyDown={this.onKeyDown}
              />
            </label>
          ) : (
            <div>
              <span className="AddTask__icon">+</span>
              <span className="AddTask__text">Add New Task</span>
            </div>
          )
        }
      </div>
    );
  }
}

AddTask.propTypes = propTypes
AddTask.defaultProps = defaultProps;
