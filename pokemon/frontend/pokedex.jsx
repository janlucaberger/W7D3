import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { configureStore } from './store/store';
import {requestPokemon} from './actions/pokemon_action';
import {fetchPokemon} from './util/api_util';

window.requestPokemon = requestPokemon
window.fetchPokemon = fetchPokemon
document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.store = store
  const rootEl = document.getElementById("root");
  ReactDOM.render(<Root store={ store }/>, rootEl);
});
