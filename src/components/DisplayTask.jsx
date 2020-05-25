import React from 'react'

export default class DisplayTak extends React.Component {
  render() {
    const listTask = this.props.tasks.map((task, index) => (
      <li key={index}>{task}</li>
    ))

    return (
      <div>
        <ul>{listTask}</ul>
      </div>
    )
  }
}
