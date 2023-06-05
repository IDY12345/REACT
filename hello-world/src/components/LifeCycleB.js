import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Ishaan'
      }
      console.log('LifeCycleB constructor')
    }
    static getDerivedStateFromProps(props , state){
        console.log('LifeCycleB getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifeCycleB componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('LifeCycleA shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log('LifeCycleB getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('LifeCycleB componentDidUpdate')
    }
    changeState = () =>{
        this.setState({
            name:'Codevolution'
        })
    }
  render() {
    console.log('LifeCycleB render')
    return (
      <div>
          LifeCycle B
      </div>
    )
  }
}

export default LifeCycleB