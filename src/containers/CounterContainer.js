import React, { Component } from "react";
import Counter from "../components/Counter";
import { increment, decrement } from "../store/modules/counter";
import { connect } from 'react-redux';

class CounterContainer extends Component {
  
  handleIncrement = () => {
    this.props.increment();
  };

  handleDecrement = () => {
    this.props.decrement();
  };
  
  render() {
    const { count } = this.props;
    console.log(this.props);
    return (
      <Counter
        count = {count}
        onIncrement = {this.handleIncrement}
        onDecrement = {this.handleDecrement}
      />
    );
  }
}

const mapStateToProps = ({ counter }) => ({
  count: counter.count,
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer);