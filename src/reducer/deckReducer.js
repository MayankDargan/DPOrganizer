/* eslint-disable require-jsdoc */
import {
  FETCH_DECK_BEGIN,
  FETCH_DECK_SUCCESS,
  FETCH_DECK_FAILURE,
  FETCH_DECK_CARDS_BEGIN,
  FETCH_DECK_CARDS_SUCCESS,
  FETCH_DECK_CARDS_FAILURE,
} from '../actions/fetchDeck';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export default function DeckReducer(
    state = initialState,
    action,
) {
  console.log(action);
  switch (action.type) {
    case FETCH_DECK_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_DECK_CARDS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_DECK_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.deck,
      };
    case FETCH_DECK_CARDS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.deck,
      };
    case FETCH_DECK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: [],
      };
    case FETCH_DECK_CARDS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: [],
      };
    default:
      return state;
  }
}
