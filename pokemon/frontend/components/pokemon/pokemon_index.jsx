import React from 'react';
import { PokemonIndexItem } from './pokemon_index_item';
import { Route } from 'react-router-dom';
import PokemonDetail from './pokemon_detail_container'
class PokemonIndex extends React.Component {

  componentDidMount(){
    // debugger
    this.props.requestAllPokemon();
  }

  render() {
    const mappedPokes = this.props.pokemon.map((poke) => {
      return <PokemonIndexItem key={poke.id} poke={poke}/>;
    });
    return(
      <div>
        <ul className="pokemon-index-list">
          { mappedPokes }
        </ul>
        <Route path="/pokemon/:pokemonId" component={PokemonDetail} />
      </div>
    );
  }

}

export default PokemonIndex;
