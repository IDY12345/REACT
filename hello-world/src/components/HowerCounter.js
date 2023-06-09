import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'
class HowerCounter extends Component {
  render() {
      const {count,incrementCount}=this.props
    return (
      <div>
          <h1 onMouseOver={incrementCount}> Hovered {count} Times</h1>
      </div>
    )
  }
}

export default UpdatedComponent(HowerCounter)