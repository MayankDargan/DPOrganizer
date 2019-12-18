/* eslint-disable require-jsdoc */
import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import * as actions from '../actions/fetchDeck';
import './deck-container.css';

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state ={cards: [], hasErrors: false, score: 0, deckId: null};
    this.shuffle.bind(this);
  }

  shuffle(context) {
    this.props.fetchNewDeck()
        .then((res)=>{
          this.props.fetchDeckCards(res.deck_id)
              .then((res) =>{
                this.setState({
                  cards: res.cards,
                });
              })
              .catch((error)=>{
                alert(error);
              });
          this.setState({
            deckId: res.deck_id,
          });
        })
        .catch((error)=>{
          alert(error);
        });
    // console.log(this.state);
  };
  render() {
    console.log(this.props);
    const {cards, hasErrors, score, deckId} = this.state;
    console.log(cards);
    let deck;
    if (cards.length !==0) {
      deck = cards.map((card) => {
        return <img src={card.images} key={card.code} alt={card.code} />;
      });
    } else {
      deck = <p>Press play to start the game</p>;
    }

    let error;
    if (hasErrors) {
      error = <p>Something went wrong!</p>;
    }
    return (
      <div className='deck-container'>
        {error}
        <div className='action-button'>
          <Button variant='light' onClick={(e) =>this.shuffle(e)}>Play/Shuffle</Button>
          <Button variant='light'>Reset high score</Button>
        </div>
        <div className='justify-content-end'>
          <p>Turns so far: <b>{score}</b></p>
        </div>
        {deck}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cards: state.cards,
});

export default connect(mapStateToProps, actions)(Deck);
