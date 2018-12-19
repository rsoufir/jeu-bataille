let defaultState={
    card1:"",
    card2:"",
    deck:"",
    pile1:"",
    pile2:""
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
    if(action.type==="CHANGE_PILE1"){
        return{
            ...state,
            pile1:action.pile1
        }
    }
    if(action.type==="CHANGE_PILE2"){
        return{
            ...state,
            pile2:action.pile2
        }
    }

    else{
        return{
            ...state
        }
    }
}

export default mainReducer;
