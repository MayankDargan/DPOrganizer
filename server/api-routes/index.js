/* eslint-disable linebreak-style */
module.exports = (app) =>{
  const path = require('path');
  const deckController = require('../controller/deck-controller');
  app.get('/newDeck', deckController.deck);
  app.get('/deckCards', deckController.deckCards);
  app.get('/', (req, res)=>res.sendFile(path.join(__dirname, '../../public', '/index.html')));
};
