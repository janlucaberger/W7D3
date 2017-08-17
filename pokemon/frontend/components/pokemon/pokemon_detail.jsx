import React from 'react';
import ItemsDetail from '../items/items_detail';
import { Route, Link } from 'react-router-dom'
import PokemonFormContainer from './pokemon_form_container'


class PokemonDetail extends React.Component {

  componentDidMount () {
    this.props.requestPokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(nextProps){
    // debugger
    if(this.props.match.params.pokemonId != nextProps.match.params.pokemonId){
      this.props.requestPokemon(nextProps.match.params.pokemonId);
    }
  }

  render () {
    // debugger
    const poke = this.props.pokemon;
    const pokeMoves = poke.moves || [];
    const pokeMovesMapped = pokeMoves.map((move, idx) => {
      return <li key={idx}>{move}</li>;
    });
    const pokeItems = this.props.items || [];
    const pokeItemsMapped = pokeItems.map((item, idx) => {
      // debugger
      return (
        <Link key={idx} to={`/pokemon/${poke.id}/items/${item.id}`}>
          <div className="poke-item-container">
            <img height="75px" src={item.image_url} />
          </div>
        </Link>
      );
    });
    // debugger
    if (!poke) {
      return (
        <div>No Pokemon</div>
      );
    }
    // debugger
    return (

      <div className="pokemon-detail-container">
        <img src={poke.image_url} />
        <h1>{poke.name}</h1>
        <ul>
          <li>Attack: {poke.attack}</li>
          <li>Defense: {poke.defense}</li>
          <ul>
            <strong>Moves</strong>
            {pokeMovesMapped}
          </ul>
        </ul>
        <ul>
          {pokeItemsMapped}
        </ul>
        <Route path="/pokemon/:pokemonId/items/:itemId" items={pokeItems} component={ItemsDetail} />
        <PokemonFormContainer />
      </div>
    );
  }
}

export default PokemonDetail;
