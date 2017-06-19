import React, { Component, PropTypes } from 'react'

import { getInitialData, loadData } from '../../../lib/dataHandler'

class TeamForm extends React.Component {
  static async getInitialProps () {
    return getInitialData()
  }

  constructor(props) {
    super(props)
    this.state = { value: props.term || '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    console.log('team new data: ', this.props.data)
    loadData(this.props.data)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value)
    if (event !== undefined && event.preventDefault) event.preventDefault()
    //    this.props.onSubmitForm(this.state.value)
  }

  render() {
    const { term } = this.props

    return (
      <div>
        <h1>Add New Team</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            id="teamName"
            type="text"
            placeholder="name"
            value={this.state.value}
            onChange={this.handleChange}
          />

          <button
            type="submit"
            onClick={this.handleSubmit}
          >
            Save
          </button>
        </form>
      </div>
    )
  }
}

export default TeamForm
