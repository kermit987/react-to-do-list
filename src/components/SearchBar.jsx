import React from 'react'

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTyping: '',
    }
  }

  render() {
    return (
      <div>
        <input
          type='text'
          // onChange={this.handleChange}
          placeholder='Search...'
        />
        <button>Search task</button>
      </div>
    )
  }
}
