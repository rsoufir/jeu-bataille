import axios from "axios";

export function loadCard1(){
    return(dispatch)=>{
        return axios.get("https://deckofcardsapi.com/api/deck/ukbbeq253ru2/draw/?count=1").then((response)=>{
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

export function loadCard2(){
    return(dispatch)=>{
        return axios.get("https://deckofcardsapi.com/api/deck/ukbbeq253ru2/draw/?count=1").then((response)=>{
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