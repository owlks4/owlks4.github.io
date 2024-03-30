import { Component } from 'react'
import './App.css'
import warsOfTheRosesTree from './assets/warsOfTheRosesTree.png';
import ordoTitleGenerator from './assets/ordoTitleGenerator.png';
import territoryMapHistory from './assets/territoryMapHistory.png';
import titanicMarconiMap from './assets/titanicMarconiMessages.png';
import degreesOfSeparationWeb from './assets/degreesOfSeparation.png';

class Card extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return (
      <div className = "card">
        <a href={this.props.cardLink} target="_blank" rel="noreferrer">
          <div className = "flex">
            <img className = "cardImage" src={this.props.imgSrc}/>
            <div>
              <h3>{this.props.cardName}</h3>
              <p className = "pCard">{this.props.description}</p> 
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
                     cardLink="./OrdoTitleGenerator/"
                     imgSrc={ordoTitleGenerator}
                     description="A title generator for the Ordo Dracul faction, from the same game as the territory map. Made with pure Javascript, HTML and CSS."/>,
               <Card cardName="Interactive Wars of the Roses tree"
                     cardLink="./wars-of-the-roses-tree-react/"
                     imgSrc={warsOfTheRosesTree}
                     description="An interactive family tree depicting the chaotic line of succession between 1327 and 1485."/>,
               <Card cardName="Territory Map Viewer"
                     cardLink="./territory-map-react/"
                     imgSrc={territoryMapHistory}
                     description="An interactive version of the paper maps from a weekly game I played at university. Made with React and CSS."/>,
               <Card cardName="Degrees of Separation web"
                     cardLink=".degrees-of-separation-web/"
                     imgSrc={degreesOfSeparationWeb}
                     description="Visualising networks of people - and using Dijkstra's algorithm to show the shortest paths between any two of them."/>,
               <Card cardName="Titanic Marconi Messages"
                     cardLink="./titanic-marconi-messages/"
                     imgSrc={titanicMarconiMap}
                     description="A 3D map depicting the exchange of wireless messages in the North Atlantic on April 15th, 1912. Made with Three.js."/>].reverse()};
  }

  render(){
    const cards = this.state.cards.map((card) => <>{card}</>);
    return (
      <div>
        <h1>Oliver's web projects</h1>
        <div className = "container">
          {cards}
        </div>
      </div>
    );
  }
}

export default App
