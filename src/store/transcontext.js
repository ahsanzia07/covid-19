import React,{createContext,useReducer} from 'react'
import TransectionReducer from './contextreducer'

const initialstage={
        death: 1000000,
        recover: 10000,
        confirmed: 100000  
    }
    
  
  export const dataSenderAndReciver=createContext(initialstage);

///////////////////

  export const DataProvider=({children})=>{

    let [state,dispatch]=useReducer(TransectionReducer,initialstage)

    function dataReceiver(e){
        dispatch ({
            type:"abx",
            payload :
            {
            death: e.death,
            recover: e.recover,
            confirmed: e.confirmed
        }
 })
 }

    return<dataSenderAndReciver.Provider value={
        {
           ahsan:state,
           dataReceiver
        }}>

    {children}

    </dataSenderAndReciver.Provider>
    }