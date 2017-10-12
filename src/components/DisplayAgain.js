import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoTextInput from './TodoTextInput'

export default class DisplayAgain extends Component {
  static propTypes = {
    counter : PropType.string,
    allItems : PropType.object
  }

  handleSave = text => {
    if (text.length !== 0) {
      this.props.addTodo(text)
    }
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <TodoTextInput newTodo
                       onSave={this.handleSave}
                       placeholder="What needs to be done?" />
      </header>
    )
  }
}

connect(
  mapStateToProps,
  mapDispatchToProps
)(App)