/* eslint-disable require-jsdoc */
function shuffleDeck() {
  return fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  })
      .then(handleErrors)
      .then((res)=> res.json());
}


export function fetchDeck() {
  return (dispatch) => {
    dispatch(fetchDeckBegin());
    return shuffleDeck()
        .then((json) => {
          dispatch(fetchDeckSuccess(json.cards));
          return json.DECK;
        })
        .catch((error) =>
          dispatch(fetchDeckFailure(error)),
        );
  };
}


// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const FETCH_DECK_BEGIN = 'FETCH_DECK_BEGIN';
export const FETCH_DECK_SUCCESS =
    'FETCH_DECK_SUCCESS';
export const FETCH_DECK_FAILURE =
    'FETCH_DECK_FAILURE';
export const FETCH_PAST_DECK = 'FETCH_PAST_DECK';

export const fetchDeckBegin = () => ({
  type: FETCH_DECK_BEGIN,
});

export const fetchDeckSuccess = (DECK) => ({
  type: FETCH_DECK_SUCCESS,
  DECK: DECK,
});

export const fetchDeckFailure = (error) => ({
  type: FETCH_DECK_FAILURE,
  payload: {error},
});
