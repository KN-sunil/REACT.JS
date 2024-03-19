import React from "react";
import Axios from "axios";
class Employees extends React.Component{
    constructor(props){
        super(props)
        this.state={
            employees:[]
        }
    }
    componentDidMount(){
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((resp)=>{
          this.setState({
            employees:resp.data
          })
        })
        .catch((err)=>{
           console.log(err)
        })
    }
    render(){
        return <div>
             <pre>{JSON.stringify(this.state.employees )  }</pre> 
            <table className="table">
                <thead>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                </thead>
                <tbody>
                    {
                        this.state.employees.length >0?
                        <>
                        {this.state.employees.map((emp)=>{
                               return <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.email}</td>

                               </tr>
                        })
                    }

                        </> : <><h2>NO DATA</h2></>
                    }
                </tbody>
            </table>

        </div>
    }
}
export default Employees
