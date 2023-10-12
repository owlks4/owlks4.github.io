import { Component } from 'react'
import './App.css'
import warsOfTheRosesTree from './assets/warsOfTheRosesTree.png';
import ordoTitleGenerator from './assets/ordoTitleGenerator.png';
 
class Card extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return (
      <div className = "card">
        <a href={this.props.cardLink} target="_blank">
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
    {'cards': [<Card cardName="Interactive Wars of the Roses tree"
                     cardLink="./WarsOfTheRosesTree/"
                     imgSrc={warsOfTheRosesTree}
                     description="An interactive family tree depicting the chaotic line of succession between 1327 and 1485."/>,
               <Card cardName="Ordo Title Generator"
                     cardLink="./OrdoTitleGenerator/"
                     imgSrc={ordoTitleGenerator}
                     description="A title generator for the Ordo Dracul faction from Vampire: The Requiem."/>,]};
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
