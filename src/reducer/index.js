/* eslint-disable linebreak-style */
import {combineReducers} from 'redux';
import cards from './deckReducer';

const rootReducer = combineReducers({
  cards,
});

export default rootReducer;
