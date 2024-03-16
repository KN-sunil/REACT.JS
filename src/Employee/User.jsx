import React from "react";
import Axios from "axios";

class User extends React.Component{
    constructor(props){
        super(props)
        this.state={
            empData:{}             //fetching object data                   
        }

    }

    componentDidMount(){
        Axios.get("https://dummyjson.com/users")
        .then((resp)=>{
      this.setState({empData:resp.data})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    render(){
        let{users}=this.state.empData
        return <div className="container">
            <pre>{JSON.stringify(this.state.empData)}</pre>
            <div className="row">
                <div className="col-8">
                    {
                        Object.keys(this.state.empData).length > 0  ?
                        <>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>AGE</th>
                                    <th>GENDER</th>
                                    <th>EMAIL</th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                                {
                                  users.map((user)=>{
                                      return <tr>
                                        <td>{user.id}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.age}</td>
                                        <td>{user.gender}</td>
                                        <td>{user.email}</td>
                                      </tr>
                                  }) 
                                }
                            </tbody>
                        </table>
                        </>:
                        <h2><>NO data</></h2>
    }

                </div>
            </div>

        </div>
    }
}
export default User