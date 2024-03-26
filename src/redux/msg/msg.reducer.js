import { GM,GA,GN } from "./msg.action";
let initialState={msg:"Hello rahul gandhi"}
let msgReducer = (state=initialState,action)=>{
    // console.log(action)
    // console.log(action.type)
    switch(action.type){
        case 'GM':
            return {msg:"Good Morning"}
        case 'GA':
            return {msg:"Lunch time"}
        case 'GN':
            return {msg:"Good Night"}
        default:
            return state
    }
}

export {msgReducer}