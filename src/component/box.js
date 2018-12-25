import React from "react";

class Box extends React.Component {
    render() {
        if((this.props.player1Win !== undefined && this.props.player1Win) && (this.props.player2Win !== undefined && this.props.player2Win)){
            return(
            <div className="wrapper">
                <div className="oneCart width100">
                    <p className="fontSize">Il y a égalité !</p>
                    <p className="fontSize">Score final - Joueur 1 : <strong>{this.props.scoreOne}</strong> Joueur 2 : <strong>{this.props.scoreTwo}</strong></p>
                    <a className="restart" href="javascript:window.location.reload()">Rejouer</a>
                </div>
            </div>
            )
        }
        if(this.props.player1Win !== undefined && this.props.player1Win){
            return(
            <div className="wrapper">
                <div className="oneCart width100">
                    <p className="fontSize">Joueur 1 gagne la partie</p>
                    <p className="fontSize">Score final - Joueur 1 : <strong>{this.props.scoreOne}</strong> Joueur 2 : <strong>{this.props.scoreTwo}</strong></p>
                    <a className="restart" href="javascript:window.location.reload()">Rejouer</a>
                </div>
            </div>
            )
        }
        if(this.props.player2Win !== undefined && this.props.player2Win){
            return(
            <div className="wrapper">
                <div className="oneCart width100">
                    <p className="fontSize">Joueur 2 gagne la partie</p>
                    <p className="fontSize">Score final - Joueur 1 : <strong>{this.props.scoreOne}</strong> Joueur 2 : <strong>{this.props.scoreTwo}</strong></p>
                    <a className="restart" href="javascript:window.location.reload()">Rejouer</a>
                </div>
            </div>
            )
        }
        return (
            <div className="wrapper">
                <div className={this.props.loading ? 'wrapper-opacity' : 'hidden'}></div>
                <div className="loaderContainer">
                    <div className={this.props.loading ? 'loader' : 'hidden'}></div>
                </div>
                <h1>La Bataille (pas pour les nuls !)</h1>
                <p className="nbBataillesRestantes">Nombre de batailles restantes : {this.props.bataillesRestantes}</p>
                <div className={this.props.deck === '' ? 'loadDeck' : 'hidden'}>
                    <button onClick={()=>{this.props.handleClickLoadDeck()}}>Démarrer une partie de jeu</button>
                </div>
                <div className="pileCart">
                    Score du joueur 1 : <b>{this.props.pile1}</b>
                </div>
                <div className="pileCart">
                    Score du joueur 2 : <b>{this.props.pile2}</b>
                </div>
                <div className="cards-container">
                    <div className="oneCart">
                        <div>
                            <img className="resize" alt="card-player-1" src={this.props.card1} />
                        </div>
                        <button onClick={()=>{this.props.handleClick1(this.props.deck)}}>Joueur 1</button>
                    </div>
                    <div className="oneCart">
                        <div>
                            <img className="resize" alt="card-player-1" src={this.props.card2} />
                        </div>
                        <button onClick={()=>{this.props.handleClick2(this.props.deck)}}>Joueur 2</button>
                    </div>
                </div>
                <div className="buttonCart">
                    <button onClick={()=>{this.props.handleClick5(this.props.card1, this.props.card2, this.props.deck)}}>
                        Lancer une bataille
                    </button>
                </div>
            </div>
        )
        
    }
}

export default Box;