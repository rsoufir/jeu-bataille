import React from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../actions/index.js"
import Box from "../component/box.js";

class BoxCon extends React.Component{
    render(){
        return(
            <Box handleClickLoadDeck={this.props.loadDeck} handleClick1={this.props.loadCard1} handleClick2={this.props.loadCard2} handleClick3={this.props.loadPile1} handleClick4={this.props.loadPile2} handleClick5={this.props.addPile} card1={this.props.card1} card2={this.props.card2} pile1={this.props.pile1} pile2={this.props.pile2} deck={this.props.deck} loading={this.props.loading} player1Win={this.props.player1Win} player2Win={this.props.player2Win} scoreOne={this.props.scoreOne} scoreTwo={this.props.scoreTwo} bataillesRestantes={this.props.bataillesRestantes}></Box>
        )
    }
}

const mapStateToProps=(state)=>{
    return state
};

export default connect (mapStateToProps, actionCreators)(BoxCon);