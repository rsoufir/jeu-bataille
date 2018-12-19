import axios from "axios";

export function loadDeck(){
    return(dispatch)=>{
        return axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1").then((response)=>{
            dispatch(loadDeckAction(response.data.deck_id));
        })
    }
}

export function loadDeckAction(deck){
    return{
        type:"LOAD_DECK",
        deck:deck
    }
}

export function loadCard1(deck_id){
    return(dispatch)=>{
        return axios.get("https://deckofcardsapi.com/api/deck/" + deck_id + "/draw/?count=1").then((response)=>{
            dispatch(changeCard1(response.data.cards[0].images.png));
        })
    }
}

export function changeCard1(card1){
    return{
        type:"CHANGE_CARD1",
        card1:card1
    }
}

export function loadCard2(deck_id){
    return(dispatch)=>{
        return axios.get("https://deckofcardsapi.com/api/deck/" + deck_id + "/draw/?count=1").then((response)=>{
            dispatch(changeCard2(response.data.cards[0].images.png));
        })
    }
}

export function changeCard2(card2){
    return{
        type:"CHANGE_CARD2",
        card2:card2
    }
}
