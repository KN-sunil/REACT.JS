import React,{useState} from "react";
let  Message=()=>{
   let[Message,setMessage]=useState("Hello")

   let gmHandler=()=>{
    setMessage("Good morning")
   }

   let gaHandler=()=>{
    setMessage("Good afternoon")
   }
//    let geHandler=()=>{
//     setMessage("Good evening")
//    }
//    let gnHandler=()=>{
//     setMessage("Good night")
//    }

   return(
    <div>
        <h1>Message component</h1>
        <h2>Message::{Message}</h2>
        <button onClick={gmHandler}>GM</button>
        <button onClick={gaHandler}>GA</button>
        <button onClick={()=>{setMessage("Good evening")}}>GE</button>        //without handler
        <button onClick={()=>{setMessage("Good night")}}>GN</button>
    </div>
   )
}
export default Message