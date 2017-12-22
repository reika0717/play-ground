import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider, connect} from 'react-redux'

class AppComponents extends React.Component {
  send(e) {
    this.props.onClick(this.refs.inputText.value)
  }

  render() {
    return (
      <div>
        <input type="text" defaultValue="" ref="inputText" />
        <button onClick={this.send.bind(this)}>calc</button>
        <p>{this.props.price}</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  price: state.price
}

const mapDispatchToProps = dispatch => {
  return {
    onClick(price) {
      dispatch(addTax(price))
    },
  }
}

let AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppComponents)

// ActionCreator
const ADDTAX = 'ADDTAX'
function addTax(price) {
  return {
    type: ADDTAX,
    price,
  }
}

// Reducer
function appReducer(state, action) {
  switch (action.type) {
    case 'ADDTAX':
      return Object.assign({}, state, {price: action.price * 1.08})
    default:
      return state
  }
}

const initialState = {
  price: '',
}

//store
const store = createStore(appReducer, initialState)

export default () => {
  return (
    <div>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </div>
  )
}
