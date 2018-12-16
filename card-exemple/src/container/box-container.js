import React from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../actions/index.js"
import Box from "../component/box.js";

class BoxCon extends React.Component{
    render(){
        return(
            <Box handleClickLoadDeck={this.props.loadDeck} handleClick1={this.props.loadCard1} handleClick2={this.props.loadCard2} card1={this.props.card1} card2={this.props.card2} deck={this.props.deck}></Box>
        )
    }
}

const mapStateToProps=(state)=>{
    return state
};

export default connect (mapStateToProps, actionCreators)(BoxCon);