import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_POKEMON = 'RECEIVE_POKEMON';

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const receivePokemon = (payload) => ({
  type: RECEIVE_POKEMON,
  payload
});

export const requestAllPokemon = () => dispatch => {
  return APIUtil.fetchAllPokemon()
  .then(pokemon => dispatch(receiveAllPokemon(pokemon)));
};

export const requestPokemon = (pokemonId) => dispatch => {
  return APIUtil.fetchPokemon(pokemonId)
  .then(pokemon => dispatch(receivePokemon(pokemon)), (err) => console.log(err));
};

export const createNewPokemon = (pokemon) => dispatch => {
  return APIUtil.createPokemon(pokemon).then(pokemon => dispatch(receivePokemon(pokemon)));
};
