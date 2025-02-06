import { Component } from 'react'
import './App.css'
import warsOfTheRosesTree from './assets/warsOfTheRosesTree.png';
import ordoTitleGenerator from './assets/ordoTitleGenerator.png';
import territoryMapHistory from './assets/territoryMapHistory.png';
import titanicMarconiMap from './assets/titanicMarconiMessages.png';
import networkOfWho from './assets/networkOfWho.png';
import journeyToMountDoom from './assets/journeyToMountDoom.png';
import tvrpgReplay from './assets/tvrpgReplay.png';
import dawnOfTheNthDay from './assets/dawnOfTheNthDay.png';

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
                <Card cardName="Dawn of the Nth Day"
                     cardLink="./dawn-of-the-nth-day/"
                     imgSrc={dawnOfTheNthDay}
                     description="Toy project for generating Majora's Mask title cards using the current date."
                     />,
                <Card cardName="Wars of the Roses tree"
                     cardLink="./wars-of-the-roses-tree/"
                     imgSrc={warsOfTheRosesTree}
                     description="An interactive family tree depicting the line of succession from 1327 to 1485."
                 />,
               <Card cardName="Titanic Marconi Messages"
                     cardLink="./titanic-marconi-messages/"
                     imgSrc={titanicMarconiMap}
                     description="The exchange of wireless messages in the North Atlantic on April 15th, 1912. Made with Three.js."
                    />,
                  <Card cardName="Territory Map Viewer"
                   cardLink="./territory-map-react/"
                   imgSrc={territoryMapHistory}
                   description="An interactive map showing changing territory ownership in a roleplaying game. Made with React and Leaflet."
                   />,
                   <Card cardName="Journey to Mount Doom"
                   cardLink="./journey-to-mount-doom/"
                   imgSrc={journeyToMountDoom}
                   description="For a given distance, how far would you have travelled along Sam and Frodo's route to Mount Doom?"
                  />,
                   <Card cardName="Titanic Voyage Replay"
                   cardLink="./tvrpg-replay/"
                   imgSrc={tvrpgReplay}
                   description="Visualisation of player movements during the 2024 Titanic Voyage RPG event. Made with Three.js."
                   />,
                   <Card cardName="Network of Who"
                   cardLink="./network-of-who/"
                   imgSrc={networkOfWho}
                   description="Breadth-first search for identifying the shortest connection between any two Doctor Who characters, generated from 60+ years of cast list data."
                 />
                  ].reverse()};
  }

  render(){
    const cards = this.state.cards.map((card) => <>{card}</>);
    return (
      <div style={{fontSize:window.innerWidth < window.innerHeight ? "0.8em" : "1em"}}>
        <h1>owlks4's web projects <span style={{userSelect:"none"}}>🦉</span></h1>
        <div style={{fontSize:"1.25em",fontWeight:"normal",opacity:0.8,lineHeight:1.3}}>
          A collection of web projects put together in my spare time.
          <br/>
          (Most are geographic/diagrammatic in nature)
          </div>
        <br/>
        <div className = "container">
          {cards}
        </div>
      </div>
    );
  }
}

export default App