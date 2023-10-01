import React, { Component } from 'react'
import News from './news'
import Price from './price'

export  class Frontpage extends Component {
  render() {
    return (
      <div>
        <Price/>
        <News/>
        
      </div>
    )
  }
}

export default Frontpage