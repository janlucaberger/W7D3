import { connect } from 'react-redux';
import PokemonIndex from './pokemon_index';
import { selectAllPokemon } from '../../reducers/selectors';
import { requestAllPokemon } from '../../actions/pokemon_action'

const mapStateToProps = (state) => ({
  pokemon: selectAllPokemon(state),
});

const mapDispatchToProps = dispatch => {
  // debugger
  return {
    requestAllPokemon: () => dispatch(requestAllPokemon())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonIndex);
