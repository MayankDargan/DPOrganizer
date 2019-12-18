/* eslint-disable require-jsdoc */
function newDeck() {
  return fetch(`http://localhost:8000/newDeck`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  })
      .then(handleErrors)
      .then((res)=> res.json());
}

function fetchDeck(deckId) {
  return fetch('http://localhost:8000/deckCards', {deckId: deckId}, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  })
      .then(handleErrors)
      .then((res)=> res.json());
}

export function fetchDeckCards(deckId) {
  return (dispatch) => {
    dispatch(fetchDeckCardsBegin());
    return fetchDeck(deckId)
        .then((response) =>{
          console.log(response);
          dispatch(fetchDeckCardsSuccess(response));
          return response;
        })
        .catch((error) =>
          dispatch(fetchDeckCardsFailure(error)),
        );
  };
}

export function fetchNewDeck() {
  return (dispatch) => {
    dispatch(fetchDeckBegin());
    return newDeck()
        .then((json) => {
          console.log(json);
          dispatch(fetchDeckSuccess(json));
          return json;
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

export const FETCH_DECK_CARDS_BEGIN = 'FETCH_DECK_BEGIN';
export const FETCH_DECK_CARDS_SUCCESS =
    'FETCH_DECK_SUCCESS';
export const FETCH_DECK_CARDS_FAILURE =
    'FETCH_DECK_FAILURE';


export const fetchDeckBegin = () => ({
  type: FETCH_DECK_BEGIN,
});

export const fetchDeckSuccess = (deck) => ({
  type: FETCH_DECK_SUCCESS,
  deck: deck,
});

export const fetchDeckFailure = (error) => ({
  type: FETCH_DECK_FAILURE,
  payload: {error},
});

export const fetchDeckCardsBegin= () => ({
  type: FETCH_DECK_CARDS_BEGIN,
});

export const fetchDeckCardsSuccess = (deck) => ({
  type: FETCH_DECK_CARDS_SUCCESS,
  deck: deck,
});

export const fetchDeckCardsFailure = (error) =>({
  type: FETCH_DECK_CARDS_FAILURE,
  payload: {error},
})
;
