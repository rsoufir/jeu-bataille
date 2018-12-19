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
                	<button onClick={()=>{this.props.handleClick1(this.props.deck)}}>Player 1</button>
                </div>
                <div className="oneCart">
                	<img alt="card2" src={this.props.card2} />
                	<button onClick={()=>{this.props.handleClick2(this.props.deck)}}>Player 2</button>
                </div>
                <div className="oneCart">
                    <p>Nombre de cartes de la pile : <br/> {this.props.pile1}</p>
                    {/* <button onClick={()=>{this.props.handleClick3(this.props.deck)}}>Pile 1</button> */}
                </div>
                <div className="oneCart">
                    <p>Nombre de cartes de la pile : <br/> {this.props.pile2}</p>
                    {/* <button onClick={()=>{this.props.handleClick4(this.props.deck)}}>Pile 2</button> */}
                </div>
                <div className="oneCart">
                    <button onClick={()=>{this.props.handleClick5(this.props.card1, this.props.card2, this.props.deck)}}>Bataille</button>
                </div>
                <div className="oneCart">
                    {this.props.player1Win === true && <p>Joueur 1 gagne la partie</p>}
                    {this.props.player2Win === true && <p>Joueur 2 gagne la partie</p>}
                </div>
            </div>
        )
    }
}

export default Box;