import React from 'react';
import { connect } from 'react-redux';

const ItemsDetail = (props) => {
  if (props.item){
    return(
      <div>
        <h3>{props.item.name}</h3>
        <p>Price: {props.item.price}</p>
        <p>Happiness: {props.item.happiness}</p></div>
    );
  } else {
    return(
      <div></div>
    )
  }

};


const mapStateToProps = (state, passedProps) => {
  // debugger
  return{

    item: state.entities.items[passedProps.match.params.itemId]
  };
};

// const mapDispatchToProps = (dispatch) => {
//
// }

export default connect(mapStateToProps)(ItemsDetail);
