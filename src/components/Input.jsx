import React from 'react'

export default class Input extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentTyping: '',
      task: [],
    }
  }

  handleChange = (e) => {
    this.setState({ currentTyping: e.target.value })
  }

  handleClick = (e) => {
    const tmp = this.state.task.concat(this.state.currentTyping)
    this.setState({ task: tmp })
  }

  render() {
    return (
      <fieldset>
        <legend>Enter a task to complete!</legend>
        <input value={this.state.currentTyping} onChange={this.handleChange} />
        {<button onClick={this.handleClick}>Add new task</button>}
      </fieldset>
    )
  }
}
