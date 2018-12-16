import React from "react";

class Box extends React.Component {
    render() {
        return (
            <div className="wrapper">

                <div className="loadDeck">
                    <div className="new-deck">{this.props.deck}</div>
                    <button onClick={()=>{this.props.handleClickLoadDeck()}}>Charger un nouveau deck</button>
                </div>
                <div className="oneCart">
                	<img alt="card1" src={this.props.card1} />
                	<button onClick={()=>{this.props.handleClick1()}}>Player 1</button>
                </div>
                <div className="oneCart">
                	<img alt="card2" src={this.props.card2} />
                	<button onClick={()=>{this.props.handleClick2()}}>Player 2</button>
                </div>
            </div>
        )
    }
}

export default Box;