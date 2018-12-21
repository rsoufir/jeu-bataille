let defaultState={
    card1:"",
    card2:"",
    deck:"",
    pile1: 0,
    pile2: 0,
    loading: false
}

const mainReducer=(state=defaultState,action)=>{
    if(action.type==="CHANGE_CARD1"){
        return{
            ...state,
            card1:action.card1,
            loading: false
        }
    }
    if(action.type==="CHANGE_CARD2"){
        return{
            ...state,
            card2:action.card2,
            loading: false
        }
    }
    if(action.type==="LOAD_DECK"){
        return{
            ...state,
            deck:action.deck,
            loading: false
        }
    }
    if(action.type==="CHARGEMENT"){
        return{
            ...state,
            loading:true
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
    if(action.type==="WHAT_PLAYER_WIN"){
        return{
            ...state,
            player1Win: action.player1Win,
            player2Win: action.player2Win
        }
    }

    else{
        return{
            ...state
        }
    }
}

export default mainReducer;
