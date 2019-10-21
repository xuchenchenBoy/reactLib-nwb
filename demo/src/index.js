import React, {Component} from 'react'
import {render} from 'react-dom'
import '../../src/button'

class Demo extends Component {
  render() {
    return <div>
      <h1>domain-mobile-lib Demo</h1>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
