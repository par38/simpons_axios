import React, { Component } from 'react';
import axios from 'axios';

import DonneesAffichees from './DonneesAffichees';
import Bouton from './Bouton.js';

const simpson = {
    quote:"Doughnuts? I told you I don't like ethnic food",
    character:	"Mr. Burns",
    image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMrBurns.png?1497567512188",
    characterDirection:	"Right"
   } 


class Api extends Component {

    state = {
        tableau: simpson
    }

    recupApi() {
     // récup des données brutes, sous forme de tableau d'objets
        axios.get("https://thesimpsonsquoteapi.glitch.me/quotes?")
            .then(reponse => reponse.data)
            .then((data) => {
         // MàJ du state initial, via le setState
                this.setState({
                    tableau: data[0]
            })
            // console.log(this.setState)    
        })
    }
       
    render() {
        console.log(this.state.tableau);
        return(
            <div>
                <Bouton changerCitation={() => this.recupApi()} />
                <DonneesAffichees citation={this.state.tableau} />
            </div>
        );
    };
}

export default Api;