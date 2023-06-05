import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Ishaan'
      }
      console.log('LifeCycleA constructor')
    }
    static getDerivedStateFromProps(props , state){
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifeCycleA componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('LifeCycleA shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log('LifeCycleA getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('LifeCycleA componentDidUpdate')
    }
    changeState = () =>{
        this.setState({
            name:'Codevolution'
        })
    }
  render() {
    console.log('LifeCycleA render')
    return (
      <div>
          <div>LifeCycle A</div>
          <button onClick={this.changeState}>Change State</button>
          <LifeCycleB />
      </div>
    )
  }
}

export default LifeCycleA