import _ from 'lodash';
import { RECEIVE_POKEMON } from '../actions/pokemon_action';

export const itemsReducer = (state = {}, action) => {
  let newState = {};
  // debugger
  switch (action.type) {
    case RECEIVE_POKEMON:
      action.payload.items.forEach((item) => {
        newState[item.id] = item;
      });
      return _.merge({},state, newState);
    default:
      return state;
  }
};
