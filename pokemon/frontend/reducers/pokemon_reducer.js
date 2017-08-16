import _ from 'lodash';
import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_action';

export const pokemonReducer = (state = {}, action) => {
  // let newState;
  switch(action.type) {
    case RECEIVE_POKEMON:
      return _.merge({}, state, {[action.payload.pokemon.id]: action.payload.pokemon});
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    default:
      return state;
  }
};
