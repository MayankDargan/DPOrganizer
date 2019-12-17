import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Scorecard from './components/scorecard';
import Deck from './components/deck-container';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            DPOrganizer Memory Game
          </p>
        </header>
        <div className="container">
          <Deck />
          <Scorecard />
        </div>

      </div>
    );
  }
}

export default App;
