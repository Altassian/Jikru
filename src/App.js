import React, { Component } from 'react';
import './App.css';
import Game from './Game.js';
import Score from './Score.js';

class App extends Component {
  constructor(props){
    super(props);
    this.handleAnswer = this.handleAnswer.bind(this);
  }
     state = {
     correctAnswer: 0,
     numQuestions: 0,
   };
 
   handleAnswer = answerWasCorrect => 
    {
     if (answerWasCorrect) {
       this.setState(currState => ({
         correctAnswer: currState.correctAnswer + 1,
       }));
   }
     this.setState(currState => ({
       numQuestions: currState.numQuestions + 1,
     }));
    };

  render() {
    return (
      <div className="App" >
      <div className="" style={{borderBottom:""}}>
        <header className="App-header">
          <a
            className="App-link"
            href="localhost:3000"
            target="_blank"
            rel="noopener noreferrer"
            style={{textDecoration:"none"}}
          >
            J &nbsp;&nbsp;&nbsp;
            I &nbsp;&nbsp;&nbsp;   
            K &nbsp;&nbsp;&nbsp;   
            R &nbsp;&nbsp;&nbsp;   
            U 
          </a>
        </header>
        <div className="App" >
        
        <div className="game">
          <h2>Mental Math</h2>
          <Game handleAnswer={this.handleAnswer} />
	        <Score numCorrect={this.state.correctAnswer} numQuestions={this.state.numQuestions} />
        </div>
        </div>
        </div>
        {/* <div className="why" style={{marginLeft:"10px", width:"39%",float:"left", paddingTop:"12px"}}>
          <h2 style={{color:"black"}}>Why Jikru...</h2>
            <h4>Daily 10 min calculation practice :</h4>
              Improves brain's strength<br />
              Improves brain's thinking capability<br />
              Improves problem solving skills<br />
              Be Brutally honest - its for yourself<br /><br /><br />

            <h2 style={{color:"black"}}>Is it enough to increase brain's strength ?</h2>
            <h4>Sorry to say, But No !</h4>
              Eat Well (Proteins and Vitamins),<br />
              Sleep Well (6 to 8 hours of quality sleep)<br />
              Exercise (Run, dance, Yoga, Gym (No to heavy weight lifting))<br />
              Drink (Water, Juices) - improves blood circulation to brain.<br />
              Solve Puzzles <br />
              <br />
          </div> */}
      </div>
    );
  }
}

export default App;
