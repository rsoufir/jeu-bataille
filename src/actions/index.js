import axios from "axios";

export function loadDeck(){
    return(dispatch)=>{
        dispatch(chargement());
        return axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1").then((response)=>{
            dispatch(loadDeckAction(response.data.deck_id));
        })
    }
}

export function loadDeckAction(deck){
    return{
        type:"LOAD_DECK",
        deck:deck,
    }
}

export function loadCard1(deck_id){
    return(dispatch)=>{
        dispatch(chargement());
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
        dispatch(chargement());
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

export function loadPile1(deck_id){
    return(dispatch)=>{
        return axios.get("https://deckofcardsapi.com/api/deck/" + deck_id + "/pile/playerone/list/").then((response)=>{
            dispatch(changePile1(response.data.piles.playerone.remaining));
        })
    }
}

function addInPile1(deck_id, cards){
    return(dispatch)=>{
        dispatch(chargement());
        return axios.get("https://deckofcardsapi.com/api/deck/" + deck_id + "/pile/playerone/add/?cards="+cards).then((response)=>{
            dispatch(changePile1(response.data.piles.playerone.remaining));
            dispatch(checkIfWinner(response.data.piles, response.data.remaining));
        })
    }
} 
function addInPile2(deck_id, cards){
    return(dispatch)=>{
        dispatch(chargement());
        return axios.get("https://deckofcardsapi.com/api/deck/" + deck_id + "/pile/playertwo/add/?cards="+cards).then((response)=>{
            dispatch(changePile2(response.data.piles.playertwo.remaining));
            dispatch(checkIfWinner(response.data.piles, response.data.remaining));
        })
    }
}

export function addPile(cardPlayer1, cardPlayer2, deck_id){
    const cardPlayer1Symbol = cardPlayer1.substring(
        cardPlayer1.lastIndexOf("/") + 1, 
        cardPlayer1.lastIndexOf(".")
    )
    const cardPlayer2Symbol = cardPlayer2.substring(
        cardPlayer2.lastIndexOf("/") + 1, 
        cardPlayer2.lastIndexOf(".")
    )
    cardPlayer1 = cardPlayer1.substring(
        cardPlayer1.lastIndexOf("/") + 1, 
        cardPlayer1.lastIndexOf(".") - 1
    )
    cardPlayer2 = cardPlayer2.substring(
        cardPlayer2.lastIndexOf("/") + 1, 
        cardPlayer2.lastIndexOf(".") - 1
    )

    const cardsTirees = cardPlayer1Symbol+','+cardPlayer2Symbol;
    const array = ['0','J', 'Q', 'K', 'A'];
    if(cardPlayer1 === cardPlayer2){
        // égalité
        return (dispatch)=>{
            dispatch(addInPile1(deck_id, cardPlayer1Symbol))
            dispatch(addInPile2(deck_id, cardPlayer2Symbol))
        };
    }
    if(!arrayContains(cardPlayer1, array) && !arrayContains(cardPlayer2, array)){
        if(cardPlayer1 > cardPlayer2){
            // joueur 1 gagne
            return (dispatch)=>{return dispatch(addInPile1(deck_id, cardsTirees))};
        }else if(cardPlayer1 < cardPlayer2){
            // joueur 2 gagne
            return (dispatch)=>{return dispatch(addInPile2(deck_id, cardsTirees))};
        }
    }else if(!arrayContains(cardPlayer1, array) && arrayContains(cardPlayer2, array)){
        // joueur 2 gagne
        return (dispatch)=>{return dispatch(addInPile2(deck_id, cardsTirees))};
    }else if(arrayContains(cardPlayer1, array) && !arrayContains(cardPlayer2, array)){
        // joueur 1 gagne
        return (dispatch)=>{return dispatch(addInPile1(deck_id, cardsTirees))};
    }else if(arrayContains(cardPlayer1, array) && arrayContains(cardPlayer2, array)){
        if(array.indexOf(cardPlayer1) > array.indexOf(cardPlayer2)){
            // joueur 1 gagne
            return (dispatch)=>{return dispatch(addInPile1(deck_id, cardsTirees))};
        }else if(array.indexOf(cardPlayer1) < array.indexOf(cardPlayer2)){
            // joueur 2 gagne
            return (dispatch)=>{return dispatch(addInPile2(deck_id, cardsTirees))};
        }
    }
}
export function changePile1(pile1){
    return{
        type:"CHANGE_PILE1",
        pile1:pile1
    }
}

export function checkIfWinner(piles, remaining){
    let playerOneWinnerOrNot = false;
    let playerTwoWinnerOrNot = false;
    let bataillesRestantes;
    let scoreOne, scoreTwo;
    if(piles.playerone === undefined && piles.playertwo === undefined){
        bataillesRestantes = 26;
        scoreOne = scoreTwo = 0;
    }else if(piles.playerone === undefined){
        scoreOne = 0;
        scoreTwo = piles.playertwo.remaining;
        bataillesRestantes = (52-scoreTwo)/2;
    }else if(piles.playertwo === undefined){
        scoreTwo = 0;
        scoreOne = piles.playerone.remaining;
        bataillesRestantes = (52-scoreOne)/2;
    }else{
        scoreOne = piles.playerone.remaining;
        scoreTwo = piles.playertwo.remaining;
        bataillesRestantes = (52 - (scoreOne + scoreTwo))/2;
    } 
    if(remaining === 0){
        if(scoreOne > scoreTwo){
            // joueur 1 gagne
            playerOneWinnerOrNot = true;
        }else if(scoreOne < scoreTwo){
            // joueur 2 gagne
            playerTwoWinnerOrNot = true;
        }else{
            playerOneWinnerOrNot = true;
            playerTwoWinnerOrNot = true;
        }
    }
    return (dispatch)=>{return dispatch(checkWin(playerOneWinnerOrNot, playerTwoWinnerOrNot, scoreOne, scoreTwo, bataillesRestantes))};
}

export function checkWin(player1Win, player2Win, scoreOne, scoreTwo, bataillesRestantes){
    return{
        type:"WHAT_PLAYER_WIN",
        player1Win:player1Win,
        player2Win:player2Win,
        scoreOne: scoreOne,
        scoreTwo: scoreTwo,
        bataillesRestantes: bataillesRestantes
    }
}

function arrayContains(needle, arrhaystack)
{
    return (arrhaystack.indexOf(needle) > -1);
}

export function loadPile2(deck_id){
    return(dispatch)=>{
        return axios.get("https://deckofcardsapi.com/api/deck/" + deck_id + "/pile/playertwo/list/").then((response)=>{
            dispatch(changePile2(response.data.piles.playertwo.remaining));
        })
    }
}

export function changePile2(pile2){
    return{
        type:"CHANGE_PILE2",
        pile2:pile2
    }
}

export function chargement(){
    return{
        type: "CHARGEMENT",
        loading: true
    }
}
