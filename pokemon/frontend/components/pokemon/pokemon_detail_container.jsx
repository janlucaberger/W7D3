import { connect } from 'react-redux';
import { requestPokemon } from '../../actions/pokemon_action';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state) => {
  debugger
  return {
    pokemon: "",
    items: ""
  }
};

const mapDispatchToProps = (dispatch) => ({
  requestPokemon: (pokeId) => dispatch(requestPokemon(pokeId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
