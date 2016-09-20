import React, { PropTypes } from 'react';
import cx from 'classnames';

import '../css/Task.css';

const propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  dueDate: PropTypes.string,
  completed: PropTypes.bool,
  selected: PropTypes.bool,
  onSelectedChange: PropTypes.func,
};

const defaultProps = {
  description: '',
  dueDate: '',
  completed: false,
  onCompletedChange() {},
  selected: false,
  onSelectedChange() {},
};

export default function Task({
  title,
  description,
  dueDate,
  selected,
  onCompletedChange,
  onSelectedChange,
}) {
  return (
    <div
      className={cx('Task', {
        'Task--selected': selected,
      })}
      onClick={onSelectedChange}
    >
      <input
        className="Task__checkbox"
        type="checkbox"
        checked={selected}
        onChange={onCompletedChange}
      />
      {title}
      {description}
      {dueDate}
    </div>
  );
}

Task.propTypes = propTypes
Task.defaultProps = defaultProps;
