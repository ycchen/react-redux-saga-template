import React from "react";
import { connect } from "react-redux";
import { updateCounter } from "../actions/counterActions";
import { Card, Button } from 'semantic-ui-react'

//The value that the counter will increase/decrease per click
const counterStep = 1;

const CounterComponent = props => {
  return (
    <Card>
      <Card.Content>
        <Card.Group centered>
          <Card.Header>Counter: {props.counter}</Card.Header>
        </Card.Group>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='orange' onClick={props.decrement}>-</Button>
          <Button basic color='green' onClick={props.increment}>+</Button>
        </div>
      </Card.Content>
    </Card>
  );
};

const mapStateToProps = state => {
  return {
    counter: state.counterReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => {
      dispatch(updateCounter(counterStep));
    },
    decrement: () => {
      dispatch(updateCounter(-counterStep));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterComponent);
