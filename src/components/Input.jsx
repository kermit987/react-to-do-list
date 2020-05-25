import React from 'react'

export default class Input extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      task: '',
    }
  }

  handleChange(e) {
    this.setState({ task: e.target.value })
  }
  render() {
    return (
      <fieldset>
        <legend>Enter a task to complete!</legend>
        <input value={this.state.task} onChange={this.handleChange} />
      </fieldset>
    )
  }
}
