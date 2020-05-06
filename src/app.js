'use strict'

import React, {Component} from 'react'
import AppContent from './components/app-content'



class App extends Component {

  constructor() {
    super()

    this.state = {
      value: '0',
      clearDisplay: false,
      operations: null,
      values: [0,0],
      current: 0
    }

    this.handleClear        = this.handleClear.bind(this)
    this.handleAddDigit     = this.handleAddDigit.bind(this)
    this.handleSetOperation = this.handleSetOperation.bind(this)
  }

  handleClear(){

    this.setState({value: ''})
  }

  handleSetOperation(operation) {
    if(this.state.current === 0) {
      this.setState({
        operations: operation,
        current: 1,
        clearDisplay: true
      })
    } else {
        const equals = operation === '='
        const currentOperation = this.state.operations

        const values = [...this.state.values]

        try{
          values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)

        } catch(e) {
          values[0] = this.state.values[0]
        }

        values[1] = 0

        this.setState({
          value: values[0],
          operations: equals ? null : operations,
          current: equals ? 0 : 1,
          clearDisplay: !equals,
          values: values
      })
    }
  }

  handleAddDigit(digit) {

    if( digit === '.' && this.state.value.includes('.') ) {
      return
    }

    const clearDisplay = this.state.value === '0' || this.state.clearDisplay
    const currentvalue = clearDisplay ? '' : this.state.value
    const displayValue = currentvalue + digit

    this.setState({ value: displayValue, clearDisplay: false })

    if (digit !== '.') {
      const i        = this.state.current
      const newValue = parseFloat( displayValue )
      const values   = [...this.state.values]
      values[i]      = newValue

      this.setState({values: values})

      console.log(values)
    }
  }

  render (){
    return (
      <AppContent
        {...this.state}
        handleClear        = { this.handleClear }
        handleSetOperation = { this.handleSetOperation}
        handleAddDigit     = { this.handleAddDigit}
      />
    )
  }
}


export default App
