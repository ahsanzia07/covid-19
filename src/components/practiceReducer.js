import React ,{useReducer}from 'react'
import {conWala} from "../App"

const fanction=(state,action)=> {
    if(action.type==="increment"){
      return state+1;
    }
    else if (action.type==="decrement"){
      return state-1;
    }
  }




    function PracticeReducer() {
      const initialValue=0
     const[state,dispatch]= useReducer(fanction,initialValue)
     return(
       <div>
         <button onClick={()=>{ dispatch ({type:"increment"})}}> inc</button>
         <p>{state}</p>
         <button onClick={()=>{ dispatch ({type:"decrement"})}}> dec</button>
       </div>
     )
      
    }
    export default PracticeReducer;
   
   
  export  function ContextWala () {
     return (<>
     <conWala.Consumer>
       {(abc)=>{
         return <h1> Hello {abc}</h1>
       }}
     </conWala.Consumer>
     </>
      
     )
   }
   
   