import { connect } from 'react-redux';
import { getSinglePokemon, getPokemonItems } from '../../reducers/selectors';
import { requestPokemon } from '../../actions/pokemon_action';
import PokemonDetail from './pokemon_detail';



const mapStateToProps = (state, passedProps) => {
  const pokeId = parseInt(passedProps.match.params.pokemonId);
  return {
    pokeId: pokeId,
    pokemon: getSinglePokemon(state, pokeId),
    items: getPokemonItems(state, pokeId)
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestPokemon: (pokeId) => dispatch(requestPokemon(pokeId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
