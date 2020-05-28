import React from 'react'
import DisplayTask from './DisplayTask'
import SearchBar from './SearchBar'

import FuzzySearch from 'fuzzy-search'

export default class Input extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentTyping: '',
      searchTyping: '',
      searchBarResult: '',
      searchBarIsUsed: false,
      tasks: [
        'Cooking',
        'buy food',
        'go to the gym',
        'meditate',
        'make my bed',
        'take a cold shower',
        'do at least 2 hour of deep work',
        'read for 1 hour',
        'send an email to Jessica',
        'walk the dog',
        'buy a new shirt',
        'cancel my appointment to the dentist',
        'book a table at the restaurant',
        'doggy',
        'teach me how to doug',
      ],
      copyTasks: [
        'Cooking',
        'buy food',
        'go to the gym',
        'meditate',
        'make my bed',
        'take a cold shower',
        'do at least 2 hour of deep work',
        'read for 1 hour',
        'send an email to Jessica',
        'walk the dog',
        'buy a new shirt',
        'cancel my appointment to the dentist',
        'book a table at the restaurant',
        'doggy',
        'teach me how to doug',
      ],
    }
  }

  handleChange = (e) => {
    this.setState({ currentTyping: e.target.value })
  }

  handleSubmit = (e) => {
    // a new task
    console.log('-----------------------------inside handleSubmit')
    const currentTyping = this.state.currentTyping
    const updatedTasks = this.state.tasks.concat(currentTyping)
    const updatedCopyTasks = this.state.copyTasks.concat(currentTyping)

    this.setState({ tasks: updatedTasks })
    this.setState({ copyTasks: updatedCopyTasks })
    this.setState({ currentTyping: '' })
  }

  handleDelete = (description) => {
    //updated for copy task
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

  handleSearch = (e) => {
    // console.log('value of e ', e.target.value)
    let tasks = []
    let tmp = []

    if (e.target.value) {
      this.state.copyTasks.forEach((value) => {
        const task = {}
        task.description = value
        tasks.push(task)
      })

      const searcher = new FuzzySearch(tasks, ['description'])
      const result = searcher.search(e.target.value) //replace by search

      result.forEach((value) => {
        tmp.push(value.description)
      })
      this.setState({ tasks: tmp })
      console.log(this.state.tasks)
    } else {
      this.setState({ tasks: this.state.copyTasks })
    }
  }

  render() {
    return (
      <fieldset>
        <legend>Enter a task to complete!</legend>
        <input
          placeholder='Add a new task'
          value={this.state.currentTyping}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Add new task</button>
        <SearchBar handleSearch={this.handleSearch} />
        <DisplayTask tasks={this.state.tasks} deleteTask={this.handleDelete} />
      </fieldset>
    )
  }
}
