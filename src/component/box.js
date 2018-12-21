import React from "react";

class Box extends React.Component {
    render() {
        if(this.props.player1Win !== undefined && this.props.player1Win){
            return(
            <div className="wrapper">
                <div className="oneCart">
                    <p>Joueur 1 gagne la partie</p>
                    <a href="javascript:window.location.reload()">Rejouer</a>
                </div>
            </div>
            )
        }
        if(this.props.player2Win !== undefined && this.props.player2Win){
            return(
            <div className="wrapper">
                <div className="oneCart">
                    <p>Joueur 2 gagne la partie</p>
                    <a href="javascript:window.location.reload()">Rejouer</a>
                </div>
            </div>
            )
        }
        return (
            <div className="wrapper">
                <div className="loadDeck">
                    <div className="new-deck">{this.props.deck}</div>
                    <button onClick={()=>{this.props.handleClickLoadDeck()}}>Charger un nouveau deck avant de jouer</button>
                    <p></p>
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
            </div>
        )
        
    }
}

export default Box;