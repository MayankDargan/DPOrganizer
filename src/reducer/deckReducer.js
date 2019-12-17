/* eslint-disable require-jsdoc */
import {
  FETCH_DECK_BEGIN,
  FETCH_DECK_SUCCESS,
  FETCH_DECK_FAILURE,
} from '../actions/DeckAction';

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

    case FETCH_DECK_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.cards,
      };

    case FETCH_DECK_FAILURE:
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
