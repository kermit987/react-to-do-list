import React from 'react'
import DisplayTask from './DisplayTask'

export default class Input extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentTyping: '',
      tasks: [],
    }
  }

  handleChange = (e) => {
    this.setState({ currentTyping: e.target.value })
  }

  handleSubmit = (e) => {
    const updatedTasks = this.state.tasks.concat(this.state.currentTyping)

    this.setState({ tasks: updatedTasks })
    this.setState({ currentTyping: '' })
  }

  handleDelete = (description) => {
    let tasks = this.state.tasks

    tasks.forEach((task, index) => {
      if (task === description) {
        const left = tasks.slice(0, index)
        const right = tasks.slice(index + 1)

        const updatedTasks = left.concat(right)
        this.setState({ tasks: updatedTasks })
      }
    })
  }

  render() {
    return (
      <fieldset>
        <legend>Enter a task to complete!</legend>
        <input value={this.state.currentTyping} onChange={this.handleChange} />
        {<button onClick={this.handleSubmit}>Add new task</button>}
        <DisplayTask tasks={this.state.tasks} deleteTask={this.handleDelete} />
      </fieldset>
    )
  }
}
