import React, {Component} from 'react'
import Child from './Child'

export default class extends Component {
  console.log('dev')
  render() {
    return <div>
      <h2>Welcome to React components</h2>
      <Child />
    </div>
  }
}
