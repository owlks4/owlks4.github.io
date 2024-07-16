import { Component } from 'react'
import './App.css'
import warsOfTheRosesTree from './assets/warsOfTheRosesTree.png';
import ordoTitleGenerator from './assets/ordoTitleGenerator.png';
import territoryMapHistory from './assets/territoryMapHistory.png';
import titanicMarconiMap from './assets/titanicMarconiMessages.png';
import degreesOfSeparationWeb from './assets/degreesOfSeparation.png';
import journeyToMountDoom from './assets/journeyToMountDoom.png';

class Card extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return (
      <div className = "card" style={{width:window.innerWidth < window.innerHeight ? "98%" : "48%" }}>
        <a href={this.props.cardLink} target="_blank" rel="noreferrer">
          <div className = "flex"  style={{flexDirection: window.innerWidth < window.innerHeight ? "column" : "row" }}>
            <img className = "cardImage" src={this.props.imgSrc}/>
            <div>
              <h3>
                {this.props.cardName}
              </h3>
              <p className = "pCard">
                {this.props.description}
                </p> 
            </div> 
          </div>
        </a>
      </div>
    );
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = 
    {'cards': [<Card cardName="Ordo Title Generator"
                     cardLink="./ordo-title-generator/"
                     imgSrc={ordoTitleGenerator}
                     description="A title generator for the Ordo Dracul faction, from the same game as the territory map. Made with pure Javascript, HTML and CSS."
                     />,
               <Card cardName="Wars of the Roses tree"
                     cardLink="./wars-of-the-roses-tree/"
                     imgSrc={warsOfTheRosesTree}
                     description="An interactive family tree depicting the chaotic line of succession between 1327 and 1485."
                     />,
               <Card cardName="Territory Map Viewer"
                     cardLink="./territory-map-react/"
                     imgSrc={territoryMapHistory}
                     description="An interactive map showing changing territory ownership in a roleplaying game. Made with React and CSS."
                     />,
               <Card cardName="Degrees of Separation web"
                     cardLink="./degrees-of-separation-web/"
                     imgSrc={degreesOfSeparationWeb}
                     description="Visualising networks of people - and using Dijkstra's algorithm to show the shortest paths between any two of them."
                    />,
               <Card cardName="Titanic Marconi Messages"
                     cardLink="./titanic-marconi-messages/"
                     imgSrc={titanicMarconiMap}
                     description="The exchange of wireless messages in the North Atlantic on April 15th, 1912. Made with Three.js."
                    />,
                <Card cardName="Journey to Mount Doom"
                    cardLink="./journey-to-mount-doom/"
                    imgSrc={journeyToMountDoom}
                    description="For a given distance, how far would you have travelled along Sam and Frodo's route to Mount Doom?"
                   />
                  ].reverse()};
  }

  render(){
    const cards = this.state.cards.map((card) => <>{card}</>);
    return (
      <div style={{fontSize:window.innerWidth < window.innerHeight ? "0.8em" : "1em"}}>
        <h1>owlks4's web projects</h1>
        <div className = "container">
          {cards}
        </div>
      </div>
    );
  }
}

export default App