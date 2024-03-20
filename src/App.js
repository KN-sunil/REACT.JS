import React, { Component } from "react";
//import Message from "./Hooks/Messagepv";
import Message from "./Hooks/Messagenpv";
// import Counter from "./Hooks/Counter";
// import Users from "./Hooks/Users";

class App extends Component{
  render(){
    return <div>
      <h1>App component</h1>
      <Message/>
    </div>
  }
}
export default App