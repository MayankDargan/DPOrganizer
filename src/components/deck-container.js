/* eslint-disable require-jsdoc */
import React from 'react';
import {Button} from 'react-bootstrap';
import './deck-container.css';

class Deck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      hasErrors: false,
      score: 0,
    };
    this.shuffle = this.shuffle.bind();
  }

  shuffle() {
    alert('shuffle');
  };
  render() {
    const {cards, hasErrors, score} = this.state;
    const deck = cards.map((card) => {
      return <img src={card.images} key={card.code} alt={card.code} />;
    });
    let error;
    if (hasErrors) {
      error = <p>Something went wrong!</p>;
    }
    return (
      <div>
        {error}
        <div className="action-button">
          <Button variant="light" onClick={this.shuffle}>Play/Shuffle</Button>
          <Button variant="light">Reset high score</Button>
        </div>
        <div className="justify-content-end">
          <p>Turns so far: <b>{score}</b></p>
        </div>
        {deck}
      </div>
    );
  }
}

export default Deck;
