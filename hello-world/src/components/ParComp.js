import React, { Component } from 'react'
import MemoComponent from './MemoComponent'
import PC from './PC'
import RegComp from './RegComp'

class ParComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Ishaan'
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Ishaan'
            })
        },2000)
    }
  render() {
      console.log('Parent Render')
    return (
      <div>
        Parent Component
      { /* <RegComp name={this.state.name} />
        <PC name={this.state.name} />*/}
        <MemoComponent name={this.state.name} />
        </div>
    )
  }
}

export default ParComp