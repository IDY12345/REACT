import React, { Component } from 'react'
import axios from 'axios'
class postList extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        posts:[],
        errorMessage:''
     }
   }
   componentDidMount(){
       axios.get('https://jsonplaceholder.typicode.com/posts1')
       .then(response =>{
           console.log(response)
           this.setState({posts:response.data})
       })
       .catch(error =>{
           console.log(error)
           this.setState({errorMessage:'Error Retrieving Data'})
       })
   }
  render() {
      const {posts, errorMessage}=this.state
    return (
      <div>
          List of Posts
          {
              posts.length ?
              posts.map(post => <div key={post.id}>{post.title}</div>):
              null
          }
          {errorMessage ? <div> {errorMessage}</div> : null}
      </div>
    )
  }
}

export default postList