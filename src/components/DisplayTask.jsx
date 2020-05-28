import React from 'react'

export default class DisplayTak extends React.Component {
  render() {
    console.log('displayTask ', this.props.tasks)
    const listTask = this.props.tasks.map((task, index) => (
      <li key={index} onClick={() => this.props.deleteTask(task)}>
        {task}
      </li>
    ))

    return (
      <div>
        <ul>{listTask}</ul>
      </div>
    )
  }
}
