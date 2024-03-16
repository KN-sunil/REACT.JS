 import React,{Component} from "react"
import Axios from "axios"
class User extends Component{
    state={
        Users:[]
    }
    getUserData=()=>{
       
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((resp)=>{
           console.log(resp.data)
           this.setState({ users:resp.data })
        })
        .catch((err)=>{
           console.log("error message")
        })
    }
    render(){
        return(
          <div>
            <h2>USER COMPONENT</h2>
            <button onClick={this.getUserData}>CLICK</button>
            <pre>{JSON.stringify(this.state.users)}</pre>

          </div>    
        )
    }
}
export default User
 