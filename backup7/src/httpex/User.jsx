import React, { Component } from 'react'
import Axios from 'axios'
class User extends Component {
  state={
    users:[]
  }  

 
  componentDidMount(){                       //this will execute after render method
     Axios.get('https://jsonplaceholder.typicode.com/users')

    .then((resp)=>{
        console.log(resp.data)
      this.setState({ users:resp.data })
    })
    .catch((err)=>{
        console.log(err)
    })
  }
  render() {
    console.log("Test Case 1")
    
    return (
      <div>
        <h2>User Component</h2>
      { <pre>{JSON.stringify(this.state.users)}</pre> }
       
      </div>
    )
  }
}

export default User