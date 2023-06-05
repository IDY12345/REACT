import React, { PureComponent } from 'react'

class PC extends PureComponent {
  render() {
    console.log('Pure Render')
    return (
      <div>
      Pure Components {this.props.name}
      </div>
    )
  }
}

export default PC