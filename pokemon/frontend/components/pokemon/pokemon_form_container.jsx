import React from 'react';
import { createNewPokemon } from '../../actions/pokemon_action';
import { connect } from 'react-redux';

class PokemonFormContainer extends React.Component{
  constructor(){
    super();

    this.state = {
      name: "",
      attack: "",
      defense: "",
      poke_type: "",
      moves: [],
      temp_move: ""
    };

    this.handleTextInput = this.handleTextInput.bind(this);
    this.addMove = this.addMove.bind(this);
    this.addPokemon = this.addPokemon.bind(this)
  }

  handleTextInput(inputKey){
    return (e) => {
      this.setState({
        [inputKey]: e.currentTarget.value
      });
    };
  }

  addMove(e){
    e.preventDefault();
    const move = this.state.temp_move;
    const moves = this.state.moves.concat([move]);

    this.setState({
      moves: moves,
      temp_move: ""
    });
  }

  addPokemon(e){
    const poke = this.state
    delete poke.temp_move
    debugger
    e.preventDefault();
    // debugger
    this.props.createNewPokemon(this.state);
  }

  render(){

    const moves = this.state.moves.map((move, idx) => {
      return <li key={idx}>{move}</li>;
    });

    return(
      <div>
        <form onSubmit={this.addPokemon}>
          <label>
            Name
            <input type="text" onChange={this.handleTextInput("name")} value={this.state.name}/>
          </label>
          <label>
            Attack #
            <input type="text" onChange={this.handleTextInput("attack")} value={this.state.attack}/>
          </label>
          <label>
            Defense #
            <input type="text" onChange={this.handleTextInput("defense")} value={this.state.defense}/>
          </label>
          <label>
            Poke Type
            <input type="text" onChange={this.handleTextInput("poke_type")}  value={this.state.poke_type}/>
          </label>
          <input type="submit" value="Create New Pokemon"/>
        </form>
        <ul>
          { moves }
        </ul>
        <form onSubmit={this.addMove} >
          <input type="text" onChange={this.handleTextInput("temp_move")} value={this.state.temp_move}/>
          <input type="submit" name="Add Move"/>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createNewPokemon: (pokemon) => dispatch(createNewPokemon(pokemon))
});

export default connect(null, mapDispatchToProps)(PokemonFormContainer);
