import React, { Component } from 'react';
import {connect} from 'react-redux';
import Count from '../components/Count';
import incrementCount from '../actions';

const mapStateToProps = (
  state,
  ownProps
) => {
  return {
    count: state
  }
}

const mapDispatchToProps = (
  dispatch,
  ownProps
) => {
  return {
    onClick: ()=> {
      dispatch(incrementCount())
    }
  }
}

const Counter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Count)

export default Counter
