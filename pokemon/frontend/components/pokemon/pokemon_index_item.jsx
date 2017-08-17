import React from 'react'
import { Link } from 'react-router-dom';

export const PokemonIndexItem = ({poke}) => {
  return (
      <Link to={`/pokemon/${poke.id}`}> 
        <li className="pokemon-index-item">
          <p className="pokemon-index-item-text">{poke.id}</p>
          <img className="pokemon-index-item-image "src={poke.image_url} />
          <p className="pokemon-index-item-text">{poke.name}</p>
        </li>
      </Link>
    );
  }
