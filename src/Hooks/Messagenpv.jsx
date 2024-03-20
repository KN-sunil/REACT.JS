
// import React,{useState} from "react"
// let Messagenpv=()=>{
// let [msg,setMsg]=useState({Message:"Hello"})
// let gmHandler=()=>{
//     setMsg("Good Morning")
// }
// let gaHandler=()=>{
//     setMsg("Good Afternoon")
// }
//     return <div>
//     <h2>Msg component</h2>
//     <h2>value:{msg.Message}</h2>
//     <pre>{JSON.stringify(msg)}</pre>
//     <button onClick={gmHandler}>GM</button>
//     <button onClick={gaHandler}>GA</button>
//     <button onClick={()=>{setMsg("Good Evening")}}>GE</button>
//     </div>
// }
// export default Messagenpv


import React,{useState} from "react";

let Message=()=>{
    let[state,setState]=useState({Message:"hello"})
    console.log(state)
    let gmHandler=()=>{
        setState({Message:"Good morning"})
        console.log("updated")
    }
    let gaHandler=()=>{
        setState({Message:"Good afternoon"})
    }
     let geHandler=()=>{
         setState({Message:"Good evening"})

    }
     let gnHandler=()=>{
        setState({Message:"Good night"})
     }
    return (
        <div>
            <h1>Message component</h1>
            <h2>Message:{state.Message}</h2>
            <button onClick={gmHandler}>GM</button>
            <button onClick={gaHandler}>GA</button>
            <button onClick={()=>{setState("Good evening")}}>GE</button>
            <button onClick={gaHandler}>GN</button> 
        </div>
    )
}
export default Message