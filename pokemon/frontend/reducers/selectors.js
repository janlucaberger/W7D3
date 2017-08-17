import _ from 'lodash';

export const selectAllPokemon = (state) => {
  return _.values(state.entities.pokemon);
};

export const getSinglePokemon = (state, pokeId) => {
  const poke = state.entities.pokemon[pokeId] ;
  return poke ? poke : {};
};

export const getPokemonItems = (state, pokeId) => {
  let pokeItems = [];

  const pokemon = state.entities.pokemon[pokeId];
  if(pokemon && pokemon.item_ids){
    pokemon.item_ids.forEach((id) => pokeItems.push(state.entities.items[id]));
  }

  return pokeItems;
};
