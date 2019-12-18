/* eslint-disable linebreak-style */
const deckService = require('../service/deck-service');
const deck = async (req, res, next) =>{
  const newDeck = await deckService.newDeck()
      .then((response)=>{
        console.log(response.data);
        return response.data;
      });
  return res.send(newDeck);
};

const deckCards = async (req, res, next) =>{
  console.log('deckCards');
  const deckId = req.params.deckId;
  const cards = await deckService.cards(deckId)
      .then((response)=>{
        console.log('response', response);
        return response;
      });
  return res.send(cards);
};

module.exports = {
  deck,
  deckCards,
};
