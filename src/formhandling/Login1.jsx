import React from "react"
class Login extends React.Component{
    state={
        email:"",
        password:"",
        mobile:""
    }

    updateHandler=(event)=>{                                                //WITHOUT MULTIPLE HANDLERS
        this.setState({[event.target.name]:event.target.value})
    }

    submitHandler=(event)=>{
        event.preventDefault();
    }
    render(){
        return <div>
            <pre>{JSON.stringify(this.state)}</pre>
            <form onSubmit={this.submitHandler}>
                <label>Email::</label>
                <input type="text" name="email" onChange={this.updateHandler}/>
                <br/><br/>
                <label>Password::</label>
                <input type="password" name="password" onChange={this.updateHandler}/>
                <br/><br/>
                <label>Mobile::</label>
                <input name="mobile" onChange={this.updateHandler}/>
                <br/><br/>
                
                <input type="submit" value="LOGIN"/>
            </form>
        </div>
    }
}
export default Login