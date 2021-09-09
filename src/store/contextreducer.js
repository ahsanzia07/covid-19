const TransectionReducer=(state,action)=>{
    
    switch(action.type){
        case "abx":{
            return action.payload
        }
        default :
        return state;
     }
}

export default TransectionReducer;