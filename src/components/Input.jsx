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

  handleClick = (e) => {
    const tmp = this.state.tasks.concat(this.state.currentTyping)
    this.setState({ tasks: tmp })
  }

  render() {
    return (
      <fieldset>
        <legend>Enter a task to complete!</legend>
        <input value={this.state.currentTyping} onChange={this.handleChange} />
        {<button onClick={this.handleClick}>Add new task</button>}
        <DisplayTask tasks={this.state.tasks} />
      </fieldset>
    )
  }
}
