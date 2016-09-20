import React, { PropTypes } from 'react';

import '../css/TaskDetails.css';

const propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string,
  }),
};

const defaultProps = {

};

export default class TaskDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { task } = this.props;
    return (
      <div className="TaskDetails">
        {task ? (<div />) : (<div className="TaskDetails__no_task">No Task Selected</div>)}
      </div>
    );
  }
}

TaskDetails.propTypes = propTypes
TaskDetails.defaultProps = defaultProps;
