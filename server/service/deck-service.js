/* eslint-disable linebreak-style */
const axios = require('axios');

const newDeck = async ()=>{
  try {
    return await axios.get(`https://deckofcardsapi.com/api/deck/new/`);
  } catch (error) {
    console.log(error);
  }
};

const cards = async (deckId) =>{
  try {
    console.log('deck card service');
    return await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=9`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  newDeck,
  cards,
};
