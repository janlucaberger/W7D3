import React from 'react';

class PokemonDetail extends React.Component {

  componentDidMount () {
    debugger
    this.props.requestPokemon(this.props.match.params.pokemonId);
  }

  render () {
    debugger
    console.log("Im rendering");
    return (
      <div>{this.props.pokemon.name}</div>
    );
  }
}

export default PokemonDetail;
