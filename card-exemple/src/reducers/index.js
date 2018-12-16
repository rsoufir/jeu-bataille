let defaultState={
    card1:"",
    card2:"",
    deck:""
}

const mainReducer=(state=defaultState,action)=>{
    if(action.type==="CHANGE_CARD1"){
        return{
            ...state,
            card1:action.card1
        }
    }
    if(action.type==="CHANGE_CARD2"){
        return{
            ...state,
            card2:action.card2
        }
    }
    if(action.type==="LOAD_DECK"){
        return{
            ...state,
            deck:action.deck
        }
    }

    else{
        return{
            ...state
        }
    }
}

export default mainReducer;