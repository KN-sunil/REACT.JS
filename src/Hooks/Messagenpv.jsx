
import React,{useState} from "react";

let Message=()=>{
    let[state,setState]=useState({Message:"hello"})

    let gmHandler=()=>{
        setState({Message:"Good morning"})
    }
    let gaHandler=()=>{
        setState({Message:"Good afternoon"})
    }
    // let geHandler=()=>{
    //     setState({Message:"Good evening"})
    // }
    // let gnHandler=()=>{
    //     setState({Message:"Good night"})
    // }
    return (
        <div>
            <h1>Message component</h1>
            <h2>Message:{state.Message}</h2>
            <button onClick={gmHandler}>GM</button>
            <button onClick={gaHandler}>GA</button>
            {/* <button onClick={()=>{setState.Message("Good evening")}}>GE</button>
            <button onClick={()=>{setState.Message("Good night")}}>GN</button> */}
        </div>
    )
}
export default Message