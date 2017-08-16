import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndex from './pokemon/pokemon_index_container.jsx';
import PokemonDetail from './pokemon/pokemon_detail_container.jsx';
import { HashRouter, Route } from 'react-router-dom';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
        <Route path="/" component={PokemonIndex} />
    </HashRouter>
  </Provider>
)

export default Root;
